import React, { memo, useEffect } from "react"
import HomeBanner from "./c-cpns/home-banner"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchHomeDataAction } from "@/store/modules/home"
import { HomeWrapper } from "./style"

const Home = memo(() => {
  // 从redux中获取到数据
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  )

  // 异步事件  发起网络请求
  const dispatch = useDispatch()
  // 副作用函数
  useEffect(() => {
    dispatch(() => {
      dispatch(fetchHomeDataAction())
    })
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <div>{goodPriceInfo.title}</div>
          <ul>
            {goodPriceInfo?.list?.map((item) => {
              return <li key={item.id}>{item.name}</li>
            })}
          </ul>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
