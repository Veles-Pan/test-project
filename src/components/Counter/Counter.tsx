import { useState } from 'react'
import './Counter.scss'

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0)

  const handleIncrement = () => {
    setCounter((prev) => prev + 1)
  }

  return (
    <div className="counter">
      <h2>{counter}</h2>
      <button onClick={handleIncrement} className="button">
        Plus 1
      </button>
    </div>
  )
}
