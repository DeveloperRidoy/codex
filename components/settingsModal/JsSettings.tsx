import React, { FC } from 'react'
import { FaCaretDown, FaCaretUp, FaPlus, FaTimes } from 'react-icons/fa'

const JsSettings = () => {
  return (
    <div className="flex flex-col gap-2 border-l-2 border-gray-600 bg-gradient-to-r from-gray-800 p-3">
      <h2 className="font-medium">Add External Scripts</h2>
      <p>
        Any URL's added here will be added as {'<script>'}s in order, and run
        before the JavaScript in the editor.
      </p>
      <div className="flex flex-col gap-3 mt-3">
        <LinkItem index={0}/>
        <LinkItem index={1}/>
        <LinkItem index={2}/>
        <button className="bg-gray-600 transition hover:bg-gray-500 active:scale-95 rounded text-sm flex items-center max-w-max px-1 ml-5">
          <FaPlus/>
          <span>Add another resource</span>
        </button>
      </div>
    </div>
  )
}

export default JsSettings

const LinkItem: FC<{index: number}> = ({index}) => {
  return (
    <div className="flex">
      <div className=" flex flex-col ">
        <button
          className="text-xl hover:text-gray-500 disabled:cursor-not-allowed disabled:text-white"
          disabled={index === 0}
        >
          <FaCaretUp />
        </button>
        <button
          className="text-xl hover:text-gray-500 disabled:cursor-not-allowed disabled:text-white"
          disabled={index === 2}
        >
          <FaCaretDown />
        </button>
      </div>
      <input
        type="text"
        className="flex-1 rounded bg-gray-100 p-2 text-black"
        placeholder="e.g. https://mywebsite.com/script.js "
      />
      <button className="bg-gray-60 rounded p-1">
        <FaTimes />
      </button>
    </div>
  )
}
