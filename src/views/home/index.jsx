import { decrement, increment, incrementBycount } from "@/store/modules/home"
import React, { memo } from "react"
import { useDispatch, useSelector } from "react-redux"

const Home = memo(() => {
  const count = useSelector((state) => state.home.value)
  const disparch = useDispatch()

  return (
    <div>
      <h1>home</h1>
      <span>{count}</span>
      <button  onClick={() => disparch(increment())}>
        +1
      </button>
      <button onClick={() => disparch(decrement())}>
        -1
      </button>
      <button onClick={() => disparch(incrementBycount(8))}>8</button>
    </div>
  )
})

export default Home
