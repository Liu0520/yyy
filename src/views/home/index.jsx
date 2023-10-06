import lyRequest from "@/services"
import { decrement, increment, incrementBycount } from "@/store/modules/home"
import React, { memo, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Home = memo(() => {
  // 测试网络请求
  const [highScore, setHighScore] = useState({})
  // 发起网络请求
  useEffect(() => {
    lyRequest.get({ url: "/home/highscore" }).then((res) => {
      console.log(res)
      setHighScore(res)
    })
  }, [])

  // 计数器
  const count = useSelector((state) => state.home.value)
  const disparch = useDispatch()

  return (
    <div>
      <h1>home</h1>
      <span>{count}</span>
      <button onClick={() => disparch(increment())}>+1</button>
      <button onClick={() => disparch(decrement())}>-1</button>
      <button onClick={() => disparch(incrementBycount(8))}>8</button>
      <h2>{highScore.title}</h2>
      <h2>{highScore.subTitle}</h2>
      <ul>
        {
          highScore.list?.map(item => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
})

export default Home
