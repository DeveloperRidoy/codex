import React, { FC, useEffect, useRef } from 'react'
import generateOutput from '../../../utils/generateOutput'
import { useGlobalContext } from '../../hoc/GlobalContext'

const OutpuIBlock: FC = () => {
  const {
    state: { codeBlocks: {html, css, js} },
  } = useGlobalContext()

  const ref = useRef<HTMLIFrameElement>(null)

  // update output when any of the codeblocks input has been updated
  useEffect(() => {
    if (ref.current) {
      ref.current.srcdoc = generateOutput(html, css, js)
    }
  }, [html, css, js])

  return (
    <div className="h-full w-full">
      <iframe
        loading="lazy"
        allow="accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"
        sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        allowFullScreen
        className="h-full w-full overflow-auto"
        ref={ref}
        frameBorder="0"
      ></iframe>
    </div>
  )
}

export default OutpuIBlock
