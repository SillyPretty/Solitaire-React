import { FC, useEffect, useState } from 'react'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { DropZone } from '../../model'
import Column from '../column/Column'
import Aside from '../aside/Aside'
import { AddColumn, TypeAddColumn, useEffectFnc } from '../../model/app'
import AsideCardRight from '../asideCardRight/AsideCardRight.tsx'

import { fetchCards } from '../../model/api/api'
import {
  ICard,
  IColumn,
  IItem,
} from '../../model/interfaces/ICard.interface.ts'
import './App.scss'

const App: FC = () => {
  const [cards, setCards] = useState<ICard[]>([])
  const [column1, setColumn1] = useState<ICard[]>([])
  const [column2, setColumn2] = useState<ICard[]>([])
  const [column3, setColumn3] = useState<ICard[]>([])
  const [column4, setColumn4] = useState<ICard[]>([])
  const [column5, setColumn5] = useState<ICard[]>([])
  const [column6, setColumn6] = useState<ICard[]>([])
  const [column7, setColumn7] = useState<ICard[]>([])
  const [freeCard, setFreeCard] = useState<ICard[]>([])
  const [columnAside1, setColumnAside1] = useState<ICard[]>([])
  const [columnAside2, setColumnAside2] = useState<ICard[]>([])
  const [columnAside3, setColumnAside3] = useState<ICard[]>([])
  const [columnAside4, setColumnAside4] = useState<ICard[]>([])

  useEffect(() => {
    fetchCards(setCards)
  }, [])

  useEffect(() => {
    useEffectFnc(
      setColumn1,
      setColumn2,
      setColumn3,
      setColumn4,
      setColumn5,
      setColumn6,
      setColumn7,
      setFreeCard,
      cards
    )
  }, [cards])

  const handleDrop = (
    item: IItem,
    column: IColumn,
    setColumn: React.Dispatch<React.SetStateAction<ICard[]>>
  ) => {
    switch (item.content.column) {
      case 'column0':
        AddColumn(item, freeCard, column, setFreeCard, setColumn)
        break
      case 'column1':
        AddColumn(item, column1, column, setColumn1, setColumn)
        break
      case 'column2':
        AddColumn(item, column2, column, setColumn2, setColumn)
        break
      case 'column3':
        AddColumn(item, column3, column, setColumn3, setColumn)
        break
      case 'column4':
        AddColumn(item, column4, column, setColumn4, setColumn)
        break
      case 'column5':
        AddColumn(item, column5, column, setColumn5, setColumn)
        break
      case 'column6':
        AddColumn(item, column6, column, setColumn6, setColumn)
        break
      case 'column7':
        AddColumn(item, column7, column, setColumn7, setColumn)
        break
    }
  }

  const AddColumnAside = (
    item: IItem,
    columnLast: ICard[],
    column: IColumn,
    setColumnLast: React.Dispatch<React.SetStateAction<ICard[]>>,
    setColumn: React.Dispatch<React.SetStateAction<ICard[]>>,
    suitColumn: 'DIAMONDS' | 'HEARTS' | 'SPADES' | 'CLUBS'
  ) => {
    if (column.content.length === 0) {
      if (item.content.value === 'ACE' && item.content.suit === suitColumn) {
        const indexOfMass = columnLast.indexOf(item.content)
        let newColumn = [...columnLast]
        let sliceCards = newColumn.splice(indexOfMass, 1)
        newColumn = newColumn.map((card, index) => {
          if (index === newColumn.length - 1) {
            return { ...card, isVisible: true }
          }
          return card
        })
        sliceCards = sliceCards.map(card => ({
          ...card,
          column: column.idColumn,
        }))
        setColumnLast(newColumn)
        setColumn(column.content.concat(sliceCards))
        return
      }
      return
    }
    if (item.content.column === column.idColumn) return
    if (
      item.content.size !==
      column.content[column.content.length - 1].size + 1
    )
      return

    const indexOfMass = columnLast.indexOf(item.content)
    let newColumn = [...columnLast]
    let sliceCards = newColumn.splice(indexOfMass, 1)
    newColumn = newColumn.map((card, index) => {
      if (index === newColumn.length - 1) {
        return { ...card, isVisible: true }
      }
      return card
    })
    sliceCards = sliceCards.map(card => ({ ...card, column: column.idColumn }))
    setColumn(column.content.concat(sliceCards))
    setColumnLast(newColumn)
  }

  const handleDropAside = (
    item: IItem,
    column: IColumn,
    setColumn: React.Dispatch<React.SetStateAction<ICard[]>>,
    suitColumn: 'DIAMONDS' | 'HEARTS' | 'SPADES' | 'CLUBS'
  ) => {
    switch (item.content.column) {
      case 'column0':
        AddColumnAside(
          item,
          freeCard,
          column,
          setFreeCard,
          setColumn,
          suitColumn
        )
        break
      case 'column1':
        AddColumnAside(item, column1, column, setColumn1, setColumn, suitColumn)
        break
      case 'column2':
        AddColumnAside(item, column2, column, setColumn2, setColumn, suitColumn)
        break
      case 'column3':
        AddColumnAside(item, column3, column, setColumn3, setColumn, suitColumn)
        break
      case 'column4':
        AddColumnAside(item, column4, column, setColumn4, setColumn, suitColumn)
        break
      case 'column5':
        AddColumnAside(item, column5, column, setColumn5, setColumn, suitColumn)
        break
      case 'column6':
        AddColumnAside(item, column6, column, setColumn6, setColumn, suitColumn)
        break
      case 'column7':
        AddColumnAside(item, column7, column, setColumn7, setColumn, suitColumn)
        break
    }
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <main className='main'>
        <Aside
          freeCard={freeCard}
          setFreeCard={setFreeCard}
        />
        <div className='wrap'>
          <DropZone
            onDrop={item =>
              handleDrop(
                item,
                { idColumn: 'column1', content: column1 },
                setColumn1
              )
            }
          >
            <Column column={column1} />
          </DropZone>
          <DropZone
            onDrop={item =>
              handleDrop(
                item,
                { idColumn: 'column2', content: column2 },
                setColumn2
              )
            }
          >
            <Column column={column2} />
          </DropZone>
          <DropZone
            onDrop={item =>
              handleDrop(
                item,
                { idColumn: 'column3', content: column3 },
                setColumn3
              )
            }
          >
            <Column column={column3} />
          </DropZone>
          <DropZone
            onDrop={item =>
              handleDrop(
                item,
                { idColumn: 'column4', content: column4 },
                setColumn4
              )
            }
          >
            <Column column={column4} />
          </DropZone>
          <DropZone
            onDrop={item =>
              handleDrop(
                item,
                { idColumn: 'column5', content: column5 },
                setColumn5
              )
            }
          >
            <Column column={column5} />
          </DropZone>
          <DropZone
            onDrop={item =>
              handleDrop(
                item,
                { idColumn: 'column6', content: column6 },
                setColumn6
              )
            }
          >
            <Column column={column6} />
          </DropZone>
          <DropZone
            onDrop={item =>
              handleDrop(
                item,
                { idColumn: 'column7', content: column7 },
                setColumn7
              )
            }
          >
            <Column column={column7} />
          </DropZone>
        </div>
        <div className='aside__right'>
          <DropZone
            onDrop={item =>
              handleDropAside(
                item,
                { idColumn: 'columnAside1', content: columnAside1 },
                setColumnAside1,
                'HEARTS'
              )
            }
          >
            <AsideCardRight
              column={columnAside1}
              suit='HEARTS'
            />
          </DropZone>
          <DropZone
            onDrop={item =>
              handleDropAside(
                item,
                { idColumn: 'columnAside2', content: columnAside2 },
                setColumnAside2,
                'DIAMONDS'
              )
            }
          >
            <AsideCardRight
              column={columnAside2}
              suit='DIAMONDS'
            />
          </DropZone>
          <DropZone
            onDrop={item =>
              handleDropAside(
                item,
                { idColumn: 'columnAside3', content: columnAside3 },
                setColumnAside3,
                'CLUBS'
              )
            }
          >
            <AsideCardRight
              column={columnAside3}
              suit='CLUBS'
            />
          </DropZone>
          <DropZone
            onDrop={item =>
              handleDropAside(
                item,
                { idColumn: 'columnAside4', content: columnAside4 },
                setColumnAside4,
                'SPADES'
              )
            }
          >
            <AsideCardRight
              column={columnAside4}
              suit='SPADES'
            />
          </DropZone>
        </div>
      </main>
    </DndProvider>
  )
}

export default App
