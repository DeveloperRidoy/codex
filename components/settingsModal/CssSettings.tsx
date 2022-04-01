import React, { FC } from 'react'
import { FaBars, FaCaretDown, FaCaretUp, FaPlus, FaTimes } from 'react-icons/fa'

const CssSettings = () => {
  return (
    <div className="flex flex-col gap-2 border-l-2 border-gray-600 bg-gradient-to-r from-gray-800 p-3">
      <h2 className="font-medium">Add External Stylesheets</h2>
      <p>
        Any URL's added here will be added as {'<link>'}s in order, and before
        the CSS in the editor.{' '}
      </p>
      <div className="flex flex-col gap-3 mt-3">
        <LinkItem index={0} />
        <LinkItem index={1} />
        <LinkItem index={2} />
      </div>
      <button className="ml-5 flex max-w-max items-center rounded bg-gray-600 px-1 text-sm transition hover:bg-gray-500 active:scale-95">
        <FaPlus />
        <span>Add another resource</span>
      </button>
    </div>
  )
}

export default CssSettings

const LinkItem: FC<{ index: number }> = ({ index }) => {
  return (
    <div className="flex gap-2">
      <button className='text-gray-500 cursor-grab active:cursor-grabbing'><FaBars/></button>
      <input
        type="text"
        className="flex-1 rounded bg-gray-100 p-2 text-black"
        placeholder="e.g. https://mywebsite.com/style.css"
      />
      <button className="bg-gray-60 rounded">
        <FaTimes />
      </button>
    </div>
  )
}
