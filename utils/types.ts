import { Dispatch, SetStateAction } from 'react'

export enum ELayout {
  ROW = 'ROW',
  COL = 'COL',
  ROW_REVERSE = 'ROW_REVERSE  ',
}

export enum EBlock {
  HTML = 'HTML',
  CSS = 'CSS',
  JS = 'JS',
  OUTPUT = 'OUTPUT',
}

export interface IBlock {
  name: EBlock
  code: string
}

export interface IHtml extends IBlock {
  htmlTagClassText: string
  headTagText: string
}

export interface ICss extends IBlock {
  styleSheets: string[]
}

export interface IJs extends IBlock {
  scriptTags: string[]
}

export type ICodeBlock = IHtml | ICss | IJs

export type TInputSizes = [number, number, number]

export type TInputOutputSizes = [number, number]

export type TModal = {
  show: boolean
  activeBlock: EBlock
}

export enum EDeviceType {
  PC = 'PC',
  MOBILE = 'MOBILE',
}
export type TState = {
  deviceType: EDeviceType
  layout: ELayout
  darkMode: boolean
  inputSizes: TInputSizes
  inputOutputSizes: TInputOutputSizes
  codeBlocks: {
    html: IHtml
    css: ICss
    js: IJs
  }
  dragBarSize: number
  snapSize: number
  loading: boolean
  settingsModal: TModal
}

export type TSetState = Dispatch<SetStateAction<TState>>

export interface IContext {
  state: TState
  setState: TSetState
}
