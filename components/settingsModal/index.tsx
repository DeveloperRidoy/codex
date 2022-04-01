import React, { FC } from 'react'
import CaptureExit from '../CaptureExit'
import { useGlobalContext } from '../hoc/GlobalContext'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import MenuList from './MenuList'
import { EBlock } from '../../types'
import HtmlSettings from './HtmlSettings'
import CssSettings from './CssSettings'
import JsSettings from './JsSettings'

const SettingsModal = () => {
  const {
    state: {
      settingsModal: { show, activeBlock },
    },
    setState,
  } = useGlobalContext()

  const closeModal = () =>
    setState((state) => ({
      ...state,
      settingsModal: { ...state.settingsModal, show: false },
    }))

  return (
    <CaptureExit show={show} exit={closeModal}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0, x: '-50%', y: '-50%' }}
        animate={{ scale: 1, opacity: 1, x: '-50%', y: '-50%' }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.1 }}
        className="fixed top-1/2 left-1/2 z-20 flex  h-[calc(100vh-50px) w-[calc(100vw-30px)] flex-col overflow-hidden rounded border-2 border-gray-700 bg-gray-900 text-s md:h-[calc(100vh-100px)] md:w-[600px]"
      >
        <Header closeModal={closeModal} />
        <div className="flex flex-col md:flex-row flex-1 gap-5 overflow-auto p-3 md:p-0">
          <MenuList />
          <div className="w-full overflow-auto pb-10">
            {activeBlock === EBlock.HTML ? (
              <HtmlSettings />
            ) : activeBlock === EBlock.CSS ? (
              <CssSettings />
            ) : (
              activeBlock === EBlock.JS && <JsSettings />
            )}
          </div>
        </div>
        <Footer closeModal={closeModal} />
      </motion.div>
    </CaptureExit>
  )
}

export default SettingsModal

const Header: FC<{ closeModal: () => void }> = ({ closeModal }) => {
  return (
    <div className="p-3  md:p-5">
      <div className="flex items-center justify-between border-b-2 border-gray-700 font-semibold">
        <div className="border-b-2 border-emerald-500 pb-2 text-lg capitalize">
          editor settings
        </div>
        <button
          className="rounded bg-gray-700 p-1 transition hover:bg-gray-600 active:scale-95"
          onClick={closeModal}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

const Footer: FC<{ closeModal: () => void }> = ({ closeModal }) => {
  return (
    <div className="flex justify-end bg-gray-700 p-3">
      <button
        className="rounded bg-emerald-500 px-4 py-2 capitalize transition hover:bg-emerald-400 active:scale-95"
        onClick={closeModal}
      >
        close
      </button>
    </div>
  )
}
