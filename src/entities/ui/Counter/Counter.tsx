import { useState } from 'react'
import { Button, classNames } from 'shared'
import { ButtonThemes } from 'shared/ui/Button/Button'
import styles from './Counter.module.scss'

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0)

  const handleIncrement = () => {
    setCounter((prev) => prev + 1)
  }

  return (
    <div className={classNames(styles.counter, {}, [])}>
      <h2>{counter}</h2>
      <Button onClick={handleIncrement} theme={ButtonThemes.COMMON}>
        Plus 1
      </Button>
    </div>
  )
}
