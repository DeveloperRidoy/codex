import React, { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { useGlobalContext } from '../hoc/GlobalContext'
import { ELayout } from '../../utils/types'
import CaptureExit from '../CaptureExit'

const LayoutTab = () => {
  const {
    state: { layout },
  } = useGlobalContext()
  const [showLayoutMenu, setShowLayoutMenu] = useState(false)

  return (
    <div className="relative h-9">
      <button
        title="Change View"
        className={`group flex h-full items-center justify-center gap-1 rounded  px-3 transition active:scale-95 ${
          showLayoutMenu ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'
        }`}
        onClick={() => setShowLayoutMenu((bool) => !bool)}
      >
        <LayoutBox layout={layout} />
      </button>
      <CaptureExit show={showLayoutMenu} exit={() => setShowLayoutMenu(false)}>
        <LayoutMenu />
      </CaptureExit>
    </div>
  )
}

export default LayoutTab

const LayoutBox: FC<{ className?: string; layout: ELayout }> = ({
  className,
  layout,
}) => {
  return (
    <div
      className={`transition ${
        layout === ELayout.COL
          ? 'rotate-90'
          : layout === ELayout.ROW_REVERSE
          ? 'rotate-180'
          : ''
      }`}
    >
      <div className={`flex gap-[2px] ${className}`}>
        <div className="grid gap-[2px]">
          <div className="h-1 w-1 bg-white"></div>
          <div className="h-1 w-1 bg-white"></div>
          <div className="h-1 w-1 bg-white"></div>
        </div>
        <div className="w-2.5 rounded-[1px] bg-white"></div>
      </div>
    </div>
  )
}

const LayoutMenu: FC = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, originX: 'right', originY: 'top' }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.1 }}
      className="absolute right-0 top-12 z-10 grid min-w-max gap-2 rounded border border-gray-600 bg-gray-700 p-5 pt-2"
    >
      <h2>Change View</h2>
      <div className="flex">
        <LayoutMenuItem name={ELayout.ROW} />
        <LayoutMenuItem name={ELayout.COL} />
        <LayoutMenuItem name={ELayout.ROW_REVERSE} />
      </div>
    </motion.div>
  )
}

const LayoutMenuItem: FC<{ name: ELayout }> = ({ name }) => {
  const {
    state: { layout },
    setState,
  } = useGlobalContext()
  return (
    <button
      className={`flex h-10 w-20 items-center justify-center border-gray-600 transition  ${
        name === layout ? 'bg-gray-600' : 'hover:bg-gray-600'
      } ${
        name === ELayout.COL
          ? 'border-y-2 '
          : name === ELayout.ROW
          ? 'rounded-l border-2'
          : 'rounded-r border-2'
      } `}
      onClick={() => setState((state) => ({ ...state, layout: name }))}
    >
      <LayoutBox layout={name} />
    </button>
  )
}
