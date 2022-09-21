import { useState } from 'react'
import styles from './Counter.module.scss'

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0)

  const handleIncrement = () => {
    setCounter((prev) => prev + 1)
  }

  return (
    <div className="counter">
      <h2>{counter}</h2>
      <button onClick={handleIncrement} className={styles.button}>
        Plus 1
      </button>
    </div>
  )
}
