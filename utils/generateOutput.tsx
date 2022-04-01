import { EBlock, IBlock, ICodeBlock, ICss, IHtml, IJs } from '../types'

const generateOutput = (html: IHtml, css: ICss, js: IJs) => {
  return `<html lang='en' ${
    html.htmlTagClassText ? `class=${html.htmlTagClassText}` : ''
  }>
          <head>
            ${html.headTagText}
            <style>${css.code}</style>
          </head>
          <body>
            ${html.code}
            <script>${js.code}</script>
          </body>
        </html>`
}

export default generateOutput
