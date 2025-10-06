import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [count , setCount] = useState(1)

    useEffect(() => {
        setCount(count + 2)
    } , [])
  return (
    <div>{count}</div>
  )
}

export default Counter

