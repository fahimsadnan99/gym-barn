import React from 'react'
import LeftSide from "./Left/index"
import RightSide from "./Right/index"

const index = () => {
  return (
    <div className='px-20 py-10'>
        <div className='grid grid-cols-2'>

        
       <LeftSide></LeftSide>
       <RightSide></RightSide>
       </div>
    </div>
  )
}

export default index