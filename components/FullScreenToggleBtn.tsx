import React, { useEffect, useRef, useState } from 'react'
import { FiMaximize, FiMinimize } from 'react-icons/fi'
import { layoutRef } from './hoc/Layout'

const FullScreenToggleBtn = () => {
  const layout = useRef(layoutRef).current

  const [isFullScreen, setIsFullScreen] = useState(false)

  const toggleScreen = () => {
    try {
      const target = layout.current as HTMLElement
      isFullScreen ? document.exitFullscreen() : target.requestFullscreen()
    } catch (error) {
      if(!document.fullscreenEnabled) alert('Either fullScreen mode is unsupported or disbaled by your device.')
    }
  }

  useEffect(() => {
    const handler = () => setIsFullScreen(document.fullscreenElement != null)
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

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
