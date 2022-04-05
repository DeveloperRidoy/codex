import React, { FC, KeyboardEventHandler, useEffect, useState } from 'react'
import { EBlock, IBlock, ICodeBlock } from '../../../../utils/types'
import { useGlobalContext } from '../../../hoc/GlobalContext'
import { FaSlash, FaStarOfLife } from 'react-icons/fa'
import { RiParenthesesLine } from 'react-icons/ri'
import { IoMdSettings } from 'react-icons/io'
import InputBlock from './InputBlock'
import Spinner from '../../../Spinner'

const CodeBlock: FC<{ block: ICodeBlock }> = ({ block }) => {
  const {
    state: { loading },
  } = useGlobalContext()

  return (
    <div
      className={`relative flex h-full w-full flex-col overflow-hidden bg-gray-900`}
    >
      <HeaderSection block={block} />
      <div className="absolute inset-0 top-9 bg-gray-800 p-3">
        {!loading && <InputBlock block={block} />}
      </div>
    </div>
  )
}

export default CodeBlock

const HeaderSection: FC<{ block: IBlock }> = ({ block }) => {
  const { setState } = useGlobalContext()
  return (
    <div className="absolute inset-x-0 flex items-center justify-between gap-3 pr-2">
      <div className=" flex max-w-max items-center gap-2 border-t border-gray-500 bg-gray-800 py-1 px-3 ">
        <div
          className={` flex h-5 w-5 items-center justify-center rounded font-bold text-black ${
            block.name === EBlock.HTML
              ? 'bg-red-500'
              : block.name === EBlock.CSS
              ? 'bg-blue-400 text-2xl'
              : 'bg-yellow-400'
          }`}
        >
          {block.name === EBlock.HTML ? (
            <FaSlash className="h-3 w-3 rotate-90" />
          ) : block.name === EBlock.CSS ? (
            <FaStarOfLife className="h-2 w-2" />
          ) : (
            <RiParenthesesLine className="h-3 w-3" />
          )}
        </div>
        <span className="text-lg font-semibold text-gray-400">
          {block.name}
        </span>
      </div>
      <button
        className="group rounded bg-gray-700 py-1 px-3 transition hover:bg-gray-600 active:scale-95"
        onClick={() =>
          setState((state) => ({
            ...state,
            settingsModal: {
              ...state.settingsModal,
              show: true,
              activeBlock: block.name,
            },
          }))
        }
      >
        <IoMdSettings className="transition group-hover:rotate-45" />
      </button>
    </div>
  )
}
