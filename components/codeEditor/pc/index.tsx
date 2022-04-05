import React from 'react'
import { ELayout } from '../../../utils/types'
import { useGlobalContext } from '../../hoc/GlobalContext'
import EditorCol from './layouts/EditorCol'
import EditorRow from './layouts/EditorRow'
import EditorRowReverse from './layouts/EditorRowReverse'

const CodeEditorPc = () => {

  const { state: { layout, inputSizes } } = useGlobalContext();
  return (
    <div className="h-full">
      {layout === ELayout.COL ? (
        <EditorCol />
      ) : layout === ELayout.ROW ? (
        <EditorRow />
      ) : (
        <EditorRowReverse />
      )}
    </div>
  )
}

export default CodeEditorPc