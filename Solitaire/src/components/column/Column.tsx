import { FC } from 'react'

import Card from '../card/Card'
import { ICard } from '../../model/interfaces/ICard.interface'
import { DraggableCard } from '../../model'

import styles from './Column.module.scss'

interface IColumn {
  column: ICard[]
}

const Column: FC<IColumn> = ({ column }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.last_card}>
        <img
          src='images/last_card.png'
          alt='last_card'
        />
      </div>
      {column.map((content, index) => {
        if (content.id === undefined || content.isVisible === undefined) return
        return (
          <DraggableCard
            content={content}
            id={content.id}
            key={index}
          >
            <Card
              img={content.image}
              isVisible={content.isVisible}
              style={index * 3}
            />
          </DraggableCard>
        )
      })}
    </div>
  )
}

export default Column
