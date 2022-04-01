import { AnimatePresence } from 'framer-motion'
import React, { FC, useEffect, useRef } from 'react'

const CaptureExit: FC<{ show: boolean; exit: () => void }> = ({
  children,
  show,
  exit,
}) => {
  return (
    <>
      <AnimatePresence>
        {show && <Child exit={exit}>{children}</Child>}
      </AnimatePresence>
    </>
  )
}

export default CaptureExit

const Child: FC<{ exit: () => void }> = ({ children, exit }) => {
  const ref = useRef<HTMLDivElement>(null)

  const mouseHandler = (e: MouseEvent) => {
    const clickedOutside = !ref.current?.contains(e.target as Node)
    if (clickedOutside) exit()
  }

  const keyboardHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') exit()
  }

  // handle mouse click and key press
  useEffect(() => {
    document.addEventListener('click', mouseHandler)
    document.addEventListener('keydown', keyboardHandler)
    return () => {
      document.removeEventListener('click', mouseHandler)
      document.removeEventListener('keydown', keyboardHandler)
    }
  })
  return <div ref={ref}>{children}</div>
}
