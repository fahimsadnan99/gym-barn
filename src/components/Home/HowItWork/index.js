import React from 'react'
import Left from  "./Left/index"
import Right from "./Right/index"

const index = () => {
  return (
    <div className='grid md:grid-cols-2 w-[85%] mx-auto xs:my-16 md:mt-16'>


        <Left></Left>
        <Right></Right>
    </div>
  )
}

export default index