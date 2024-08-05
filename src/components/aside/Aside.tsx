import { FC } from 'react'

import { DraggableCard } from '../../model'
import ResetButton from '../resetButton/ResetButton'

import { IAside } from '../../model/interfaces/IAsideCard.interface'

import styles from './Aside.module.scss'
import Card from '../card/Card'

const Aside: FC<IAside> = ({ freeCard, setFreeCard }) => {
  const rebut = () => {
    setFreeCard(
      freeCard.map(card => {
        return { ...card, isVisible: false }
      })
    )
  }
  const clickFnc = () => {
    let num: number = 0
    setFreeCard(
      freeCard
        .reverse()
        .map(card => {
          if (card.isVisible === false && num === 0) {
            num++
            return { ...card, isVisible: true }
          }
          return card
        })
        .reverse()
    )
  }

  return (
    <div className={styles.aside}>
      <ResetButton
        img='/images/reset_card.png'
        rebut={rebut}
      />
      {freeCard.map((content, index) => {
        if (content.id === undefined) return
        return (
          <DraggableCard
            id={content.id}
            content={content}
            key={index}
          >
            <Card
              content={content}
              click={clickFnc}
              number={freeCard.length - index}
              aside={true}
            />
          </DraggableCard>
        )
      })}
    </div>
  )
}

export default Aside
