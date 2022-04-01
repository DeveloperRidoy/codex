import React from 'react'
import { useGlobalContext } from './hoc/GlobalContext'
import { AnimatePresence, motion } from 'framer-motion'

const Backdrop = () => {
  const {
    state: { settingsModal },
    setState,
  } = useGlobalContext()

  const closeModal = () =>
    setState((state) => ({
      ...state,
      settingsModal: { ...state.settingsModal, show: false },
    }))

  return (
    <AnimatePresence>
      {settingsModal.show && (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="absolute inset-0 z-10 bg-black/70"
        >
         
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Backdrop
