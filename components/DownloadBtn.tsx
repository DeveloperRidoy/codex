import React from 'react'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import generateOutput from '../utils/generateOutput'
import { useGlobalContext } from './hoc/GlobalContext'

const DownloadBtn = () => {
  const {
    state: { codeBlocks },
  } = useGlobalContext()

  const downloadCode = () => {
    const text = generateOutput(codeBlocks)
    const blob = new Blob([text], { type: 'text/html' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'project.html'
    a.click()
  }

  return (
    <button
      onClick={downloadCode}
      className="relative h-8 w-8 text-4xl text-gray-600 transition hover:text-gray-500 active:scale-95"
      title="Download Project"
    >
      <div className=" absolute top-3 left-2 h-4 w-4 bg-white"></div>
      <FaCloudDownloadAlt className="relative" />
    </button>
  )
}

export default DownloadBtn
