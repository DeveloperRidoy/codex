import { createContext, FC, useContext, useEffect, useState } from 'react'
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
} from '../../types'

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
    inputSizes: [100 / 3, 100 / 3, 100 / 3],
    inputOutputSizes: [50, 50],
    codeBlocks: {
      html:{
        name: EBlock.HTML,
        code: '',
        htmlTagClassText: '',
        headTagText: '',
      },
      css:{
        name: EBlock.CSS,
        code: '',
        styleTags: [],
      },
      js:{
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

  // get initial data from localStorage
  useEffect(() => {
    let html: IHtml; 
    let css: ICss;
    let js :IJs;

    const htmlJson = localStorage.getItem(EBlock.HTML);
    const cssJson = localStorage.getItem(EBlock.CSS);
    const jsJson = localStorage.getItem(EBlock.JS);

    if (htmlJson) html = JSON.parse(htmlJson);
    if (cssJson) css = JSON.parse(cssJson);
    if (jsJson) js = JSON.parse(jsJson);
    
    setState((state) => ({
      ...state,
      codeBlocks: {html, css, js},
      loading: false,
    }))
  }, [])

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  )
}

export default GlobalContext
