import {
  ChangeEvent,
  FC,
  KeyboardEventHandler,
  useEffect,
  useState,
} from 'react'
import { EBlock, ICodeBlock, ICss, IHtml, IJs } from '../../../../utils/types'
import debounce from '../../../../utils/debounce'
import { useGlobalContext } from '../../../hoc/GlobalContext'

const InputBlock: FC<{ block: ICodeBlock }> = ({ block }) => {
  const {
    state: { codeBlocks },
    setState,
  } = useGlobalContext()

  const [inputState, setInputState] = useState<{
    firstRender: boolean
    blockName: EBlock
    code: string
  }>({ firstRender: true, blockName: block.name, code: block.code })

  // input handler
  const inputHandler = () => {
    const updatedBlock = { ...block, code: inputState.code } as ICodeBlock
    // save to localStorage
    localStorage.setItem(block.name, JSON.stringify(updatedBlock))

    const html =
      inputState.blockName === EBlock.HTML
        ? (updatedBlock as IHtml)
        : codeBlocks.html
    const css =
      inputState.blockName === EBlock.CSS
        ? (updatedBlock as ICss)
        : codeBlocks.css
    const js =
      inputState.blockName === EBlock.JS ? (updatedBlock as IJs) : codeBlocks.js

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

    if (block.code === inputState.code) return

    debounce(inputHandler, 500)
  }, [inputState.code])

  // update currenIBlock on block change
  useEffect(() => {
    if (inputState.firstRender)
      return setInputState({ ...inputState, firstRender: false })

    if (inputState.blockName === block.name) return
    setInputState({ ...inputState, blockName: block.name, code: block.code })
  }, [block.name])

  // text indent on tab
  const indentHandler: KeyboardEventHandler = (e) => {
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

  const inputCode = (e: ChangeEvent) => {
    setInputState((state) => ({
      ...state,
      code: (e.target as HTMLTextAreaElement).value,
    }))
  }

  return (
    <textarea
      value={inputState.code}
      className="h-full w-full resize-none bg-gray-800 text-base text-gray-200 outline-none"
      spellCheck={false}
      onChange={inputCode}
      onKeyDown={indentHandler}
    ></textarea>
  )
}

export default InputBlock
