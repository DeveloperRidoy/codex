import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { IBlock, ICodeBlock } from '../../../utils/types'
import { useGlobalContext } from '../../hoc/GlobalContext'
import InpuIBlock from '../blocks/codeBlock/InputBlock'
import OutpuIBlock from '../blocks/OutputBlock'

const CodeEditorMobile = () => {
  
  const {
    state: { codeBlocks, loading },
  } = useGlobalContext()
  
  const [activeBlock, setActiveBlock] = useState<ICodeBlock | null>(
    codeBlocks.html
  )
  
  const [resultActive, setResultActive] = useState(true)
  
  
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between bg-gray-900 px-3 py-2">
        <div className="flex gap-1">
          {Object.values(codeBlocks).map((block, i) => (
            <button
              key={i}
              className={`py-1 px-3 uppercase transition ${
                activeBlock?.name === block.name ? 'bg-gray-700' : 'bg-gray-800'
              }`}
              onClick={() => {
                if (activeBlock?.name === block.name) {
                  setActiveBlock(null)
                  if (!resultActive) setResultActive(true)
                } else {
                  setActiveBlock(block)
                }
              }}
            >
              {block.name}
            </button>
          ))}
          <button
            className={` py-1 px-3 capitalize transition ${
              resultActive ? 'bg-gray-700' : 'bg-gray-800'
            }`}
            onClick={() =>
              setResultActive((bool) => (activeBlock ? !bool : true))
            }
          >
            result
          </button>
        </div>
      </div>
      {activeBlock && (
        <div className="h-full bg-gray-800 p-3">
          {!loading && <InpuIBlock block={activeBlock} />}
        </div>
      )}
      {resultActive && <OutpuIBlock />}
    </div>
  )
}

export default CodeEditorMobile

