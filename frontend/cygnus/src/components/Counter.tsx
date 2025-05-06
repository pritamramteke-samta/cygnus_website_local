import React from 'react'
import { useCounterStore } from '../stores/counterStore'
import { Button } from '@mantine/core'

const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button variant="filled" color="teal" onClick={increment}>+ Increment</Button>
      <Button variant="filled" color="teal" onClick={decrement}>- Decrement</Button>
      <Button variant="filled" color="teal" onClick={reset}>Reset</Button>
      
    </div>
  )
}

export default Counter
