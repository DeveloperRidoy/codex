import React, { FC } from 'react'
import Split from 'react-split'
import { TInputOutputSizes, TInputSizes } from '../../../../utils/types'
import { useGlobalContext } from '../../../hoc/GlobalContext'
import CodeBlock from '../../blocks/codeBlock'
import OutputBlock from '../../blocks/OutputBlock'

const EditorCol: FC = () => {
  const {
    state: {
      inputSizes,
      inputOutputSizes,
      dragBarSize,
      codeBlocks: { html, css, js },
    },
    setState,
  } = useGlobalContext()
  return (
    <Split
      sizes={inputOutputSizes}
      direction="vertical"
      minSize={0}
      gutterSize={dragBarSize}
      gutterStyle={() => ({
        backgroundColor: '#111827',
        border: '1px solid rgba(255, 255, 255, .2)',
        height: `${dragBarSize}px`,
      })}
      onDrag={(size) =>
        setState((state) => ({
          ...state,
          inputOutputSizes: size as TInputOutputSizes,
        }))
      }
      className="flex h-full flex-col overflow-hidden"
    >
      <Split
        sizes={inputSizes}
        direction="horizontal"
        minSize={0}
        gutterSize={dragBarSize}
        expandToMin
        gutterStyle={() => ({
          border: '1px solid rgba(255, 255, 255, .2)',
          width: `${dragBarSize}px`,
        })}
        onDrag={(size) =>
          setState((state) => ({
            ...state,
            inputSizes: size as TInputSizes,
          }))
        }
        className="flex h-full flex-row overflow-hidden bg-gray-900"
      >
        <CodeBlock block={html}/>
        <CodeBlock block={css}/>
        <CodeBlock block={js}/>
      </Split>
      <OutputBlock />
    </Split>
  )
}

export default EditorCol
