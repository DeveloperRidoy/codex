import React from 'react'
import LayoutTab from './LayoutTab'
import Logo from '../Logo'
import SettingsTab from './SettingsTab'
import DownloadBtn from '../DownloadBtn'
import FullScreenToggleBtn from '../FullScreenToggleBtn'

const Nav = () => {
  return (
    <div className="text-md z-10 flex items-center justify-between border-b border-gray-700 bg-gray-900 px-3 py-2 md:py-3 md:px-10">
      <Logo />
      <div className="flex items-center gap-4">
        <DownloadBtn />
        <SettingsTab />
        <div className="hidden md:block">
          <LayoutTab />
        </div>
        <FullScreenToggleBtn />
      </div>
    </div>
  )
}

export default Nav
