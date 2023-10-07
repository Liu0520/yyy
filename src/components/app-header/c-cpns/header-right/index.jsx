import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  // 定义组件内部的状态

  
  // 副作用代码


  // 事件处理函数


  return (
    <RightWrapper>
      <div className="btns">
        <div className="btn">登录</div>
        <div className="btn">注册</div>
        <div className="btn">
          <IconGlobal/>
        </div>
      </div>

      <div className="profile">
        <IconMenu/>
        <IconAvatar/>
      </div>
    </RightWrapper>
  )
})

export default HeaderRight