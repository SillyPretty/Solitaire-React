import { FC, useEffect, useState } from 'react'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { DropZone } from '../../model/index.tsx'
import Column from '../../components/column/Column.tsx'
import Aside from '../../components/aside/Aside.tsx'
import { AddColumn, AddColumnAside, useEffectFnc } from '../../model/app.ts'
import AsideCardRight from '../../components/asideCardRight/AsideCardRight.tsx'

import { IFetchCard, fetchCards } from '../../model/api/api.ts'
import {
  ICard,
  IColumn,
  IColumns,
  IColumnsAside,
  IItem,
} from '../../model/interfaces/ICard.interface.ts'
import './App.scss'
import WinScreen from '../win/WinScreen.tsx'

const App: FC = () => {
  const [cards, setCards] = useState<IFetchCard[]>([])
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
  const [isWin, setIsWin] = useState<boolean>(false)

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

  const handleDropAside = (
    item: IItem,
    column: IColumn,
    setColumn: React.Dispatch<React.SetStateAction<ICard[]>>,
    suitColumn: string
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
    if (
      column1.length === 0 &&
      column2.length === 0 &&
      column3.length === 0 &&
      column4.length === 0 &&
      column5.length === 0 &&
      column6.length === 0 &&
      column7.length === 0
    ) {
      setIsWin(!isWin)
    }
  }

  const columns: IColumns[] = [
    {
      idColumn: 'column1',
      column: column1,
      setColumn: setColumn1,
    },
    {
      idColumn: 'column2',
      column: column2,
      setColumn: setColumn2,
    },
    {
      idColumn: 'column3',
      column: column3,
      setColumn: setColumn3,
    },
    {
      idColumn: 'column4',
      column: column4,
      setColumn: setColumn4,
    },
    {
      idColumn: 'column5',
      column: column5,
      setColumn: setColumn5,
    },
    {
      idColumn: 'column6',
      column: column6,
      setColumn: setColumn6,
    },
    {
      idColumn: 'column7',
      column: column7,
      setColumn: setColumn7,
    },
  ]

  const columnsAside: IColumnsAside[] = [
    {
      idColumn: 'columnAside1',
      columnAside: columnAside1,
      setColumnAside: setColumnAside1,
      suit: 'HEARTS',
    },
    {
      idColumn: 'columnAside2',
      columnAside: columnAside2,
      setColumnAside: setColumnAside2,
      suit: 'DIAMONDS',
    },
    {
      idColumn: 'columnAside3',
      columnAside: columnAside3,
      setColumnAside: setColumnAside3,
      suit: 'CLUBS',
    },
    {
      idColumn: 'columnAside4',
      columnAside: columnAside4,
      setColumnAside: setColumnAside4,
      suit: 'SPADES',
    },
  ]

  return (
    <DndProvider backend={HTML5Backend}>
      <main className='main'>
        {isWin && <WinScreen />}
        <aside className='aside_left'>
          <Aside
            freeCard={freeCard}
            setFreeCard={setFreeCard}
          />
        </aside>
        <div className='wrap'>
          {columns.map(({ idColumn, column, setColumn }, index) => (
            <DropZone
              key={index}
              onDrop={item =>
                handleDrop(
                  item,
                  { idColumn: idColumn, content: column },
                  setColumn
                )
              }
            >
              <Column column={column} />
            </DropZone>
          ))}
        </div>
        <aside className='aside__right'>
          {columnsAside.map(
            ({ idColumn, columnAside, setColumnAside, suit }, index) => (
              <DropZone
                key={index}
                onDrop={item =>
                  handleDropAside(
                    item,
                    { idColumn: idColumn, content: columnAside },
                    setColumnAside,
                    suit
                  )
                }
              >
                <AsideCardRight
                  column={columnAside}
                  suit={suit}
                />
              </DropZone>
            )
          )}
        </aside>
      </main>
    </DndProvider>
  )
}

export default App
