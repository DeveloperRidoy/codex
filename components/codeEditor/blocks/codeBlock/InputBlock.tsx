import { FC, KeyboardEventHandler, useEffect, useState } from 'react'
import { EBlock, ICodeBlock, ICss, IHtml, IJs } from '../../../../types'
import debounce from '../../../../utils/debounce'
import { useGlobalContext } from '../../../hoc/GlobalContext'

const InputBlock: FC<{ block: ICodeBlock }> = ({ block }) => {
  const {
    state: { codeBlocks },
    setState,
  } = useGlobalContext()

  const [inputState, setInputState] = useState<{
    firstRender: boolean
    block: ICodeBlock
  }>({ firstRender: true, block })

  // input handler
  const inputHandler = () => {
    // save to localStorage
    localStorage.setItem(block.name, JSON.stringify(inputState.block))

    const html =
      inputState.block.name === EBlock.HTML
        ? (inputState.block as IHtml)
        : codeBlocks.html
    const css =
      inputState.block.name === EBlock.CSS
        ? (inputState.block as ICss)
        : codeBlocks.css
    const js =
      inputState.block.name === EBlock.JS
        ? (inputState.block as IJs)
        : codeBlocks.js
    
        // update state
    setState((state) => ({
      ...state,
      codeBlocks: { html, css, js },
    }))
  }

  // update input after 500 ms gap
  useEffect(() => {
    if (inputState.firstRender) {
      setInputState({ ...inputState, firstRender: false })
      return
    }

    if (block.code === inputState.block.code) return

    debounce(() => inputHandler(), 500)
  }, [inputState.block.code])

  // update currenIBlock on block change
  useEffect(() => {
    if (inputState.firstRender) {
      setInputState({ ...inputState, firstRender: false })
      return
    }

    if (inputState.block.name === block.name) return
    setInputState({ ...inputState, block })
  }, [block.name])

  const indentHandler: KeyboardEventHandler = (e) => {
    // text indent on tab
    console.log(e)

    if (e.key === 'Tab') {
      e.preventDefault()
      const target = e.target as HTMLTextAreaElement
      const start = target.selectionStart
      const end = target.selectionEnd
      target.value =
        target.value.substring(0, start) + '\t' + target.value.substring(end)
      target.selectionEnd = start + 1
    }
  }

  return (
    <textarea
      value={inputState.block.code}
      className="h-full w-full resize-none bg-gray-800 text-base text-gray-200 outline-none"
      spellCheck={false}
      onInput={(e) => {
        setInputState((state) => ({
          ...state,
          block: {
            ...state.block,
            code: (e.target as HTMLTextAreaElement).value,
          },
        }))
      }}
      onKeyDown={indentHandler}
    ></textarea>
  )
}

export default InputBlock
