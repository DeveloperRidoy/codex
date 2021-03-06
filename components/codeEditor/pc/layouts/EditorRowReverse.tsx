import React, { FC } from 'react'
import Split from 'react-split'
import { TInputSizes } from '../../../../utils/types'
import { useGlobalContext } from '../../../hoc/GlobalContext'
import CodeBlock from '../../blocks/codeBlock'
import OutpuBlock from '../../blocks/OutputBlock'

const EditorRowReverse: FC = () => {
  const {
    state: { inputSizes, inputOutputSizes, dragBarSize, codeBlocks: {html, css ,js} },
    setState,
  } = useGlobalContext()

  return (
    <Split
      sizes={inputOutputSizes}
      direction="horizontal"
      minSize={0}
      gutterSize={dragBarSize}
      gutterStyle={() => ({
        backgroundColor: '#111827',
        border: '1px solid rgba(255, 255, 255, .2)',
        width: `${dragBarSize}px`,
      })}
      onDrag={(size) =>
        setState((state) => ({
          ...state,
          inputOutputSizes: [size[1], size[0]] as [number, number],
        }))
      }
      className="flex h-full flex-row-reverse overflow-hidden"
    >
      <Split
        sizes={inputSizes}
        direction="vertical"
        minSize={0}
        gutterSize={dragBarSize}
        gutterStyle={() => ({
          border: '1px solid rgba(255, 255, 255, .2)',
          height: `${dragBarSize}px`,
        })}
        onDrag={(size) =>
          setState((state) => ({
            ...state,
            inputSizes: size as TInputSizes,
          }))
        }
        className="flex h-full flex-col overflow-hidden bg-gray-900"
      >
        <CodeBlock block={html}/>
        <CodeBlock block={css}/>
        <CodeBlock block={js}/>
      </Split>
      <OutpuBlock />
    </Split>
  )
}

export default EditorRowReverse
