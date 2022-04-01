import React, { useRef, useState } from 'react'
import { FiMaximize, FiMinimize } from 'react-icons/fi'
import { layoutRef } from './hoc/Layout'

const FullScreenToggleBtn = () => {
  const layout = useRef(layoutRef).current

  const [isFullScreen, setIsFullScreen] = useState(false)

  const toggleScreen = () => {
    try {
      const target = layout.current as HTMLElement
      const fullScreen = document.fullscreenElement

      if (fullScreen) {
        document.exitFullscreen()
        setIsFullScreen(false)
      } else {
        target.requestFullscreen()
        setIsFullScreen(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button
      title={isFullScreen ? 'minimize' : 'maximize'}
      className="text-xl text-gray-400 transition hover:scale-125 hover:text-white"
      onClick={toggleScreen}
    >
      {isFullScreen ? <FiMinimize /> : <FiMaximize />}
    </button>
  )
}

export default FullScreenToggleBtn
