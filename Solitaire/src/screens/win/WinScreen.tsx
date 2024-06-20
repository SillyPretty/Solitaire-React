import styles from './WinScreen.module.scss'

const WinScreen = () => {
  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <section className={styles.wrap}>
      <div className={styles.wrap__content}>
        <h1>You Win!</h1>
        <button onClick={refreshPage}>Начать с начала</button>
      </div>
    </section>
  )
}

export default WinScreen
