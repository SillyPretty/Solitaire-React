import { FC } from 'react'

import styles from './AsideCard.module.scss'
import { ICard } from '../../model/interfaces/ICard.interface'

interface IAsideCard {
  content: ICard
  number: number
  click: () => void
}

const AsideCard: FC<IAsideCard> = ({ content, number, click }) => {

  return (
    <div
      className={styles.card}
      style={{
        position: 'absolute',
        cursor: 'pointer',
      }}
      onClick={() => click()}
    >
      {content.isVisible ? (
        <div
          className={styles.card__wrap}
          style={{
            position: 'absolute',
            top: `500px`,
            zIndex: `${number}`,
          }}
        >
          <img
            src={content.image}
            alt={content.image}
          />
        </div>
      ) : (
        <div className={styles.card__wrap}>
          <img
            src='images/loading.png'
            alt='loading'
          />
        </div>
      )}
    </div>
  )
}

export default AsideCard
