import { createRef, FC } from 'react'
import Backdrop from '../Backdrop'
import Nav from '../nav'
import SettingsModal from '../settingsModal'

export const layoutRef = createRef<HTMLDivElement>()

const Layout: FC = ({ children }) => {
  return (
    <div ref={layoutRef} className="relative flex h-screen flex-col text-white">
      <Nav />
      {children}
      <SettingsModal />
      <Backdrop />
    </div>
  )
}

export default Layout
