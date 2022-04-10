import {
  ChangeEvent,
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react'
import {
  EBlock,
  ELayout,
  EDeviceType,
  IContext,
  TState,
  ICodeBlock,
  IHtml,
  ICss,
  IJs,
} from '../../utils/types'

const Context = createContext<IContext>({
  state: {} as TState,
  setState: () => {},
})

export const useGlobalContext = () => useContext(Context)

const GlobalContext: FC<{ deviceType: EDeviceType }> = ({
  deviceType,
  children,
}) => {
  const initialState: TState = {
    deviceType,
    layout: ELayout.COL,
    darkMode: false,
    inputSizes: [100 / 3, 100 / 3, 100 / 3],
    inputOutputSizes: [50, 50],
    codeBlocks: {
      html: {
        name: EBlock.HTML,
        code: '',
        htmlTagClassText: '',
        headTagText: '',
      },
      css: {
        name: EBlock.CSS,
        code: '',
        styleSheets: [],
      },
      js: {
        name: EBlock.JS,
        code: '',
        scriptTags: [],
      },
    },
    dragBarSize: 18,
    snapSize: 50,
    loading: true,
    settingsModal: {
      show: false,
      activeBlock: EBlock.HTML,
    },
  }
  const [state, setState] = useState(initialState)

  useEffect(() => {
    // get initial data from localStorage
    let html = state.codeBlocks.html
    let css = state.codeBlocks.css
    let js = state.codeBlocks.js

    const htmlJson = localStorage.getItem(EBlock.HTML)
    const cssJson = localStorage.getItem(EBlock.CSS)
    const jsJson = localStorage.getItem(EBlock.JS)

    if (htmlJson) html = JSON.parse(htmlJson)
    if (cssJson) css = JSON.parse(cssJson)
    if (jsJson) js = JSON.parse(jsJson)

    // listen for color scheme change
    const colorSchemeListener = (e: MediaQueryListEvent) => {
      setState((state) => ({ ...state, darkMode: e.matches }))
    }
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', colorSchemeListener)

    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    // update state
    setState((state) => ({
      ...state,
      darkMode,
      codeBlocks: { html, css, js },
      loading: false,
    }))

    // cleanup
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', colorSchemeListener)
    }
  }, [])

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  )
}

export default GlobalContext
