import React, { memo } from 'react'

import Home from './views/home'
import Detail from '@/views/detail'
import Entire from './views/entire'


const App = memo(() => {
  return (
    <div>App
      <Home></Home>
      <Detail/>
      <Entire/>
    </div>
  )
})

export default App