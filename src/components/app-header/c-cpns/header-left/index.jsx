import React, { memo } from "react"
import { LeftWrapper } from "./style"
import IconLogo from "@/assets/svg/icon_logo"

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className="logo">
        <img src="https://z1.muscache.cn/pictures/carson/carson-1679478687466-5517d573/original/acf9627c-88c2-420c-a4ad-c2da40626afa.png" alt="" />
        {/* <IconLogo /> */}
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
