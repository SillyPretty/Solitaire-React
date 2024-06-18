import { IFetchCard } from '../api/api'

export interface ICard {
  id: number
  column: string
  code: string
  image: string
  isVisible: boolean
  images: {
    svg: string
    png: string
  }
  suit: string
  value: string
  color: string
  size: number
}

export interface IItem {
  id: string
  content: ICard
}

export interface IColumn {
  idColumn: string
  content: ICard[]
}

export type TypeUseEffectFnc = (
  setColumn1: React.Dispatch<React.SetStateAction<ICard[]>>,
  setColumn2: React.Dispatch<React.SetStateAction<ICard[]>>,
  setColumn3: React.Dispatch<React.SetStateAction<ICard[]>>,
  setColumn4: React.Dispatch<React.SetStateAction<ICard[]>>,
  setColumn5: React.Dispatch<React.SetStateAction<ICard[]>>,
  setColumn6: React.Dispatch<React.SetStateAction<ICard[]>>,
  setColumn7: React.Dispatch<React.SetStateAction<ICard[]>>,
  setFreeCard: React.Dispatch<React.SetStateAction<ICard[]>>,
  cards: IFetchCard[]
) => void

export type TypeGroupItemFunc = (
  column: ICard[],
  index: number,
  number: number,
  numberColumn: string,
  cards: IFetchCard[]
) => void

export interface IColumns {
  idColumn: string
  column: ICard[]
  setColumn: React.Dispatch<React.SetStateAction<ICard[]>>
}

export interface IColumnsAside {
  idColumn: string
  columnAside: ICard[]
  setColumnAside: React.Dispatch<React.SetStateAction<ICard[]>>
  suit: string
}
