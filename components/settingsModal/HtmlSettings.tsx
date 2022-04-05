import React, { ChangeEvent, useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { EBlock, IHtml } from '../../utils/types'
import debounce from '../../utils/debounce'
import { useGlobalContext } from '../hoc/GlobalContext'

const HtmlSettings = () => {
  const {
    state: {
      codeBlocks: { html },
    },
    setState,
  } = useGlobalContext()

  const [firstRender, setFirstRender] = useState(true)
  const [htmlClass, setHtmlClass] = useState(html.htmlTagClassText)
  const [headText, setHeadText] = useState(html.headTagText)

  const addClassToHtml = () => {
    const updatedHtml = { ...html, htmlTagClassText: htmlClass } as IHtml;
    localStorage.setItem(EBlock.HTML, JSON.stringify(updatedHtml));
    setState((state) => ({
      ...state,
      codeBlocks: {
        ...state.codeBlocks,
        html: updatedHtml,
      },
    }))
  }

  const addTextToHead = () => {
    const updatedHtml = { ...html, headTagText: headText } as IHtml;
    localStorage.setItem(EBlock.HTML, JSON.stringify(updatedHtml))
    setState((state) => ({
      ...state,
      codeBlocks: {
        ...state.codeBlocks,
        html: updatedHtml,
      },
    }))
  }

  const insertCommonTagsToHead = () => {
    const text =
      '\n<meta name="viewport" content="width=device-width, initial-scale=1">'
    setHeadText(prevText => prevText + text);
  }

  useEffect(() => {
    if (firstRender) return setFirstRender(false)
    if (html.htmlTagClassText !== htmlClass) debounce(addClassToHtml, 500)
    if (html.headTagText !== headText) {
      debounce(addTextToHead, 500)
    }
  }, [headText, htmlClass])

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col  gap-2 border-l-2 border-gray-600 bg-gradient-to-r from-gray-800 p-3">
        <div className="font-medium">Add Class(es) to {'<html>'}</div>
        <input
          type="text"
          className="rounded bg-gray-100 p-2 text-black"
          placeholder="e.g. post post-123"
          value={htmlClass}
          onChange={(e) => setHtmlClass((e.target as HTMLInputElement).value)}
        />
      </div>
      <div className="flex flex-col  gap-2 border-l-2 border-gray-600 bg-gradient-to-r from-gray-800 p-3">
        <div className="font-medium">Stuff for {'<head>'}</div>
        <textarea
          rows={5}
          className="rounded bg-gray-100 p-2 text-black"
          placeholder="e.g. <title>, <meta>, <link>, <script> "
          value={headText}
          onChange={(e) => setHeadText((e.target as HTMLTextAreaElement).value)}
        />
        <button
          className="flex max-w-max items-center rounded bg-gray-600 px-1 text-sm transition hover:bg-gray-500 active:scale-95"
          onClick={insertCommonTagsToHead}
        >
          <FaArrowUp />
          <span>Insert the most common viewport meta tag</span>
        </button>
      </div>
    </div>
  )
}

export default HtmlSettings
