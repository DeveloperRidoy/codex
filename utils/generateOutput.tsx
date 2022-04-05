import { ICss, IHtml, IJs } from './types'

/**
 * @returns string containing the html body
 */
const generateOutput = (html: IHtml, css: ICss, js: IJs) => {
  let styleSheets: string = ""
  let scriptTags: string = '';
  
  css.styleSheets.forEach(href => {
    // ignore empty href string
    if (href !== '' && href !== null) {
      // add styleSheet with href
      styleSheets = styleSheets + `<link rel="stylesheet" href=${href}/>`
    }
  })

  js.scriptTags.forEach((src) => {
    // ignore empty src string
    if (src !== '' && src !== null) {
      // add styleSheet with src
      styleSheets = styleSheets + `<script src=${src}></script>`
    }
  })

  return `<html lang='en' ${
    html.htmlTagClassText ? `class=${html.htmlTagClassText}` : ''
  }>
          <head>
            ${html.headTagText}
            ${styleSheets}
            <style>${css.code ?? ''}</style>
          </head>
          <body>
            ${html.code ?? ''}
            ${scriptTags}
            <script>${js.code}</script>
          </body>
        </html>`
}

export default generateOutput
