import React from 'react'
import { IoMdSettings } from 'react-icons/io'
import { useGlobalContext } from '../hoc/GlobalContext'

const SettingsTab = () => {
  const { setState } = useGlobalContext()

  return (
    <div>
      <button
        title="Settings"
        className="group flex h-9 items-center gap-1 rounded bg-gray-700 px-4 transition hover:bg-gray-600 active:scale-95"
        onClick={() =>
          setState((state) => ({
            ...state,
            settingsModal: { ...state.settingsModal, show: true },
          }))
        }
      >
        <div className="text-xl transition group-hover:rotate-45 -mt-1">
          <IoMdSettings />
        </div>
        <span className="-mt-1 hidden md:block capitalize">settings</span>
      </button>
    </div>
  )
}

export default SettingsTab
