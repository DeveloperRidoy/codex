import { FC, useEffect } from 'react'
import { EDeviceType } from '../../utils/types'
import { useGlobalContext } from '../hoc/GlobalContext'
import CodeEditorMobile from './mobile'
import CodeEditorPc from './pc'
import debounce from '../../utils/debounce'

const CodeEditor: FC = () => {
  const {
    state: { deviceType },
    setState,
  } = useGlobalContext()

  useEffect(() => {
    const resizeHandler = (e: UIEvent) => {
      debounce(() => {
        const target = e.target as Window

        if (target.innerWidth <= 768 && deviceType === EDeviceType.PC) {
          setState((state) => ({ ...state, deviceType: EDeviceType.MOBILE }))
        }

        if (target.innerWidth > 768 && deviceType === EDeviceType.MOBILE) {
          setState((state) => ({ ...state, deviceType: EDeviceType.PC }))
        }
      }, 500)
    }
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [deviceType])

  return deviceType === EDeviceType.PC ? <CodeEditorPc /> : <CodeEditorMobile />
}

export default CodeEditor
