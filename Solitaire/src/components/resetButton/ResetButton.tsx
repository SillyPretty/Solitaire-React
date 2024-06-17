import { FC } from 'react'

import styles from './ResetButton.module.scss'

interface IResetButton {
  img: string
  rebut: () => void
}

const ResetButton: FC<IResetButton> = ({ img, rebut }) => {
  const onClickFunc = () => {
    rebut()
  }

  return (
    <div
      className={styles.card}
      onClick={() => onClickFunc()}
    >
      <img
        src={img}
        alt={img}
      />
    </div>
  )
}

export default ResetButton
