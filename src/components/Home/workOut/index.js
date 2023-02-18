import React from 'react'

import LeftSide from "./left/index"
import RightSide from "./right/index"

const index = () => {
  return (
    <div className='grid md:grid-cols-2 w-[85%] mx-auto'>

<LeftSide></LeftSide>
<RightSide></RightSide>
    </div>
  )
}

export default index