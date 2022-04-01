import React from 'react'
import { useGlobalContext } from '../hoc/GlobalContext'

const MenuList = () => {
  
    const {
      state: {
        settingsModal: { activeBlock },
        codeBlocks,
      },
      setState,
    } = useGlobalContext()
  return (
    <div className="flex w-32 gap-2 md:flex-col md:gap-0">
      {Object.values(codeBlocks).map((block) => (
        <button
          key={block.name}
          className={`rounded  px-2 py-1 text-left font-medium transition md:rounded-none md:border-l-2 md:p-[3px] md:pl-3 ${
            activeBlock === block.name
              ? 'border-emerald-500  bg-gray-700'
              : 'border-transparent hover:bg-gray-700'
          }`}
          onClick={() =>
            setState((state) => ({
              ...state,
              settingsModal: {
                ...state.settingsModal,
                activeBlock: block.name,
              },
            }))
          }
        >
          {block.name}
        </button>
      ))}
    </div>
  )
}

export default MenuList