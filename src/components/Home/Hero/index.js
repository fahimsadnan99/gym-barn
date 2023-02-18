import React from 'react'
import LeftSide from "./Left/index"
import RightSide from "./Right/index"

const index = () => {
  return (
    <div className='xs:px-5 md:px-20 xs:py-7 md:py-10'>
        <div className='grid lg:grid-cols-2'>

        
       <LeftSide></LeftSide>
       <RightSide></RightSide>
       </div>
    </div>
  )
}

export default index