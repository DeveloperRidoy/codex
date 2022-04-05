import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { FaCaretDown, FaCaretUp, FaPlus, FaTimes } from 'react-icons/fa'
import { EBlock, ICss } from '../../utils/types'
import debounce from '../../utils/debounce'
import { useGlobalContext } from '../hoc/GlobalContext'

const CssSettings = () => {
  const {
    state: {
      codeBlocks: {
        css: { styleSheets },
      },
    },
  } = useGlobalContext()

  const [links, setLinks] = useState<string[]>(styleSheets.length === 0 ? ['', '', '']: styleSheets)

  return (
    <div className="flex flex-col gap-2 border-l-2 border-gray-600 bg-gradient-to-r from-gray-800 p-3">
      <h2 className="font-medium">Add External Stylesheets</h2>
      <p>
        Any URL's added here will be added as {'<link>'}s in order, and before
        the CSS in the editor.{' '}
      </p>
      <div className="mt-3 flex flex-col gap-3 ">
        {links.map((link, i) => (
          <LinkItem
            key={i}
            link={link}
            index={i}
            links={links}
            setLinks={setLinks}
          />
        ))}
        <button
          title="Add another resource"
          className="ml-7 flex max-w-max items-center rounded bg-gray-600 px-1 text-sm transition hover:bg-gray-500 active:scale-95"
          onClick={() => setLinks((links) => [...links, ''])}
        >
          <FaPlus />
          <span>Add another resource</span>
        </button>
      </div>
    </div>
  )
}

export default CssSettings

type LinkProps = {
  link: string
  links: string[]
  index: number
  setLinks: Dispatch<SetStateAction<string[]>>
}

const LinkItem: FC<LinkProps> = ({ link, index, links, setLinks }) => {
  const [firstRender, setFirstRender] = useState(true)
  const {
    state: {
      codeBlocks: { css },
    },
    setState,
  } = useGlobalContext()

  const inputHandler = (e: ChangeEvent) => {
    setLinks((links) =>
      links.map((item, i) =>
        i === index ? (e.target as HTMLInputElement).value : item
      )
    )
  }

  const updatestyleSheets = () => {
    const cssBlock = {
      ...css,
      styleSheets: links.filter((src) => src !== null),
    } as ICss

    // save to localStorage
    localStorage.setItem(EBlock.CSS, JSON.stringify(cssBlock))

    // update state
    setState((state) => ({
      ...state,
      codeBlocks: {
        ...state.codeBlocks,
        css: cssBlock,
      },
    }))
  }

  // update css styleSheets after 500ms of link change
  useEffect(() => {
    if (firstRender) return setFirstRender(false)
    debounce(updatestyleSheets, 500)
  }, [link])

  const moveUp = () => {
    setLinks((links) =>
      links.map((item, i) =>
        i === index - 1
          ? link ?? item
          : i === index
          ? links[i - 1] ?? link
          : item
      )
    )
  }

  const moveDown = () => {
    setLinks((links) =>
      links.map((item, i) =>
        i === index
          ? links[i + 1] ?? link
          : i === index + 1
          ? link ?? item
          : item
      )
    )
  }

  const removeLink = () =>
    setLinks((links) => links.filter((_, i) => i !== index))

  return (
    <div className={`flex items-center gap-2 ${index === links.length - 1 ? 'hidden': ""}`}>
      <div className="flex flex-col gap-1">
        <button
          title="Move Up"
          tabIndex={-1}
          disabled={index === 0}
          className="bg-gray-700 p-[1px] text-lg transition hover:bg-gray-600 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-900"
          onClick={moveUp}
        >
          <FaCaretUp />
        </button>
        <button
          title="Move Down"
          tabIndex={-1}
          disabled={index === links.length - 1}
          className="bg-gray-700 p-[1px] text-lg transition hover:bg-gray-600 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-900"
          onClick={moveDown}
        >
          <FaCaretDown />
        </button>
      </div>
      <input
        type="text"
        className="flex-1 rounded bg-gray-100 p-2 text-black"
        placeholder="e.g. https://mywebsite.com/style.css"
        value={link}
        onChange={inputHandler}
      />
      <button
        title="Remove"
        tabIndex={-1}
        className="bg-gray-60 bg-gray-700 p-[1px] transition hover:bg-gray-600 active:scale-95"
        onClick={removeLink}
      >
        <FaTimes />
      </button>
    </div>
  )
}
