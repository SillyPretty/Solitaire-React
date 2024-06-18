import { FC } from 'react'

import styles from './AsideCardRight.module.scss'
import { DraggableCard } from '../../model'
import { ICard } from '../../model/interfaces/ICard.interface'
import Card from '../card/Card'

interface IAsideCardRight {
  column: ICard[]
  suit: string
}

const AsideCardRight: FC<IAsideCardRight> = ({ column, suit }) => {
  return (
    <div
      className={styles.wrap}
      style={{ marginTop: `10px`, marginRight: '30px' }}
    >
      <div className={styles.last_card}>
        <img
          src={`images/${suit}.png`}
          alt={suit}
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
            <div style={{position: 'absolute'}}>
              <Card
                img={content.image}
                isVisible={content.isVisible}
                style={0}
              />
            </div>
          </DraggableCard>
        )
      })}
    </div>
  )
}

export default AsideCardRight
