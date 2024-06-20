import { FC } from 'react'

import {
  BsFillSuitClubFill,
  BsFillSuitDiamondFill,
  BsFillSuitHeartFill,
  BsFillSuitSpadeFill,
} from 'react-icons/bs'

import { ICard } from '../../model/interfaces/ICard.interface'

import styles from './Card.module.scss'

interface ICardComponent {
  content: ICard
  style?: number
  aside?: boolean
  click?: () => void
  number?: number
}

const Card: FC<ICardComponent> = ({
  content,
  style,
  aside,
  click = () => {},
  number,
}) => {
  const { isVisible, size, value, color, suit } = content

  return (
    <>
      {isVisible ? (
        <div
          className={styles.card}
          style={{
            width: '75px',
            position: 'absolute',
            top: aside ? '350px' : `${style}0px`,
            zIndex: `${number}`,
          }}
        >
          <div className={styles.card__wrap}>
            <div className={styles.card__content}>
              <span style={{ color: color }}>
                {size === 10 ? value : value[0]}
              </span>
              {suit === 'CLUBS' && <BsFillSuitClubFill color={color} />}
              {suit === 'DIAMONDS' && <BsFillSuitDiamondFill color={color} />}
              {suit === 'HEARTS' && <BsFillSuitHeartFill color={color} />}
              {suit === 'SPADES' && <BsFillSuitSpadeFill color={color} />}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={styles.card}
          style={{
            position: 'absolute',
            top: aside ? '0px' : `${style}0px`,
          }}
          onClick={() => click()}
        >
          <img
            style={{
              maxWidth: '75px',
              pointerEvents: 'none',
            }}
            src='images/loading.png'
            alt='loading'
          />
        </div>
      )}
    </>
  )
}

export default Card
