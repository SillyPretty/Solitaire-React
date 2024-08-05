import { IFetchCard } from './api/api'
import {
  TypeUseEffectFnc,
  ICard,
  TypeGroupItemFunc,
  IItem,
  IColumn,
} from './interfaces/ICard.interface'

const CardColor = (card: IFetchCard): string => {
  return card.suit === 'CLUBS' || card.suit === 'SPADES' ? 'black' : 'red'
}

const SizeCard = (card: IFetchCard): number => {
  const sizeColumn: string[] = [
    'ACE',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'JACK',
    'QUEEN',
    'KING',
  ]
  return sizeColumn.indexOf(card.value) + 1
}

export const useEffectFnc: TypeUseEffectFnc = (
  setColumn1,
  setColumn2,
  setColumn3,
  setColumn4,
  setColumn5,
  setColumn6,
  setColumn7,
  setFreeCard,
  cards
) => {
  const newColumn1: ICard[] = []
  const newColumn2: ICard[] = []
  const newColumn3: ICard[] = []
  const newColumn4: ICard[] = []
  const newColumn5: ICard[] = []
  const newColumn6: ICard[] = []
  const newColumn7: ICard[] = []
  const newFreeCard: ICard[] = []

  cards.forEach((_, index) => {
    switch (true) {
      case newColumn1.length < 1:
        groupItemFunc(newColumn1, index, 1, 'column1', cards)
        break
      case newColumn2.length < 2:
        groupItemFunc(newColumn2, index, 2, 'column2', cards)
        break
      case newColumn3.length < 3:
        groupItemFunc(newColumn3, index, 3, 'column3', cards)
        break
      case newColumn4.length < 4:
        groupItemFunc(newColumn4, index, 4, 'column4', cards)
        break
      case newColumn5.length < 5:
        groupItemFunc(newColumn5, index, 5, 'column5', cards)
        break
      case newColumn6.length < 6:
        groupItemFunc(newColumn6, index, 6, 'column6', cards)
        break
      case newColumn7.length < 7:
        groupItemFunc(newColumn7, index, 7, 'column7', cards)
        break
      default:
        newFreeCard.push({
          id: index,
          column: 'column0',
          isVisible: false,
          ...cards[index],
          color: CardColor(cards[index]),
          size: SizeCard(cards[index]),
        })
        break
    }
  })
  setColumn1(newColumn1)
  setColumn2(newColumn2)
  setColumn3(newColumn3)
  setColumn4(newColumn4)
  setColumn5(newColumn5)
  setColumn6(newColumn6)
  setColumn7(newColumn7)
  setFreeCard(newFreeCard)
}

const groupItemFunc: TypeGroupItemFunc = (
  column,
  index,
  number,
  numberColumn,
  cards
) => {
  if (column.length < number - 1) {
    column.push({
      id: index,
      column: numberColumn,
      isVisible: false,
      ...cards[index],
      color: CardColor(cards[index]),
      size: SizeCard(cards[index]),
    })
  } else {
    column.push({
      id: index,
      column: numberColumn,
      isVisible: true,
      ...cards[index],
      color: CardColor(cards[index]),
      size: SizeCard(cards[index]),
    })
  }
}

type TypeAddColumn = (
  item: IItem,
  columnLast: ICard[],
  column: IColumn,
  setColumnLast: React.Dispatch<React.SetStateAction<ICard[]>>,
  setColumn: React.Dispatch<React.SetStateAction<ICard[]>>
) => void

export const AddColumn: TypeAddColumn = (
  item,
  columnLast,
  column,
  setColumnLast,
  setColumn
) => {
  if (column.content.length === 0) {
    if (item.content.value !== 'KING') return
  } else {
    if (
      item.content.suit === column.content[column.content.length - 1].suit ||
      item.content.color === column.content[column.content.length - 1].color ||
      item.content.size !== column.content[column.content.length - 1].size - 1
    )
      return
  }

  const indexOfMass = columnLast.indexOf(item.content)
  let sliceCards = columnLast.splice(
    indexOfMass,
    item.content.column === 'column0' ? 1 : columnLast.length - indexOfMass
  )
  columnLast = columnLast.map((card, index) => {
    if (index === columnLast.length - 1) {
      return { ...card, isVisible: true }
    }
    return card
  })
  sliceCards = sliceCards.map(card => ({ ...card, column: column.idColumn }))
  setColumn(column.content.concat(sliceCards))
  setColumnLast(columnLast)
}

type TypeAddColumnAside = (
  item: IItem,
  columnLast: ICard[],
  column: IColumn,
  setColumnLast: React.Dispatch<React.SetStateAction<ICard[]>>,
  setColumn: React.Dispatch<React.SetStateAction<ICard[]>>,
  suitColumn: string
) => void

export const AddColumnAside: TypeAddColumnAside = (
  item,
  columnLast,
  column,
  setColumnLast,
  setColumn,
  suitColumn
) => {
  if (column.content.length === 0 && item.content.suit === suitColumn) {
    if (item.content.value !== 'ACE') return
  } else if (
    item.content.column === column.idColumn ||
    item.content.size !== column.content[column.content.length - 1].size + 1 ||
    item.content.suit !== column.content[column.content.length - 1].suit
  )
    return
  const indexOfMass = columnLast.indexOf(item.content)
  let sliceCards = columnLast.splice(indexOfMass, 1)
  columnLast = columnLast.map((card, index) => {
    if (index === columnLast.length - 1) {
      return { ...card, isVisible: true }
    }
    return card
  })
  sliceCards = sliceCards.map(card => ({ ...card, column: column.idColumn }))
  setColumn(column.content.concat(sliceCards))
  setColumnLast(columnLast)
}

