import { ICard } from "./ICard.interface"

export interface IAsideCard {
  img: string
  isVisible: boolean
  click: boolean
  number: number
}

export interface IAside {
  freeCard: ICard[]
  setFreeCard: React.Dispatch<React.SetStateAction<ICard[]>>
}
