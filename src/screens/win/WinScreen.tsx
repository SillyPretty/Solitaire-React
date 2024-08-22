import { FC } from 'react'
import styles from './WinScreen.module.scss'

const WinScreen: FC = () => {
  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <section className={styles.wrap}>
      <div className={styles.wrap__content}>
        <h1>You Win!</h1>
        <button onClick={refreshPage}>Начать с заново</button>
      </div>
    </section>
  )
}

export default WinScreen
