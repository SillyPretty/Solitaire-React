import { FC } from 'react'

import { useDrag, useDrop } from 'react-dnd'
import { ICard } from './interfaces/ICard.interface'

interface IDraggableCard {
  id: number
  children: React.ReactNode
  content: ICard
}

interface IDropZone {
  onDrop: (item?: any, monitor?: any) => void
  children: React.ReactNode
}

export const DraggableCard: FC<IDraggableCard> = ({ content, children }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'column',
    item: { id: 'unique-card-id', content: content },
    collect: monitor => ({
      isDragging: !!monitor.isDragging() ? 0.5 : 1,
    }),
  })

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging }}
    >
      {children}
    </div>
  )
}

export const DropZone: FC<IDropZone> = ({ onDrop, children }) => {
  const [, drop] = useDrop({
    accept: 'column',
    drop: (item, monitor) => onDrop(item, monitor),
  })

  return <div ref={drop}>{children}</div>
}
