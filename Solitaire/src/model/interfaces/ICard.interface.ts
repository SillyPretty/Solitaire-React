export interface ICard {
  id?: number
  column?: string
  code: string
  image: string
  isVisible?: boolean
  images: {
    svg: string
    png: string
  }
  suit: string
  value: string
  color?: string
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
  cards: ICard[]
) => void

export type TypeGroupItemFunc = (
  column: ICard[],
  index: number,
  number: number,
  numberColumn: string,
  cards: ICard[]
) => void
