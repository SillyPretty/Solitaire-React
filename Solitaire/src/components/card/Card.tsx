import { FC } from 'react'

import styles from './Card.module.scss'

interface ICard {
  img: string
  style?: number
  isVisible: boolean
}

const Card: FC<ICard> = ({ img, style, isVisible = false }) => {
  if (isVisible) {
  }
  return (
    <>
      {isVisible ? (
        <div
          className={styles.card}
          style={{
            position: 'absolute',
            top: `${style}0px`,
          }}
        >
          <img
            src={img}
            alt={img}
          />
        </div>
      ) : (
        <div
          className={styles.card}
          style={{
            position: 'absolute',
            top: `${style}0px`,
            pointerEvents: 'none',
          }}
        >
          <img
            src='images/loading.png'
            alt='loading'
          />
        </div>
      )}
    </>
  )
}

export default Card
