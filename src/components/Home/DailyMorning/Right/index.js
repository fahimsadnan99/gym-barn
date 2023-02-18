import Image from 'next/image'
import React from 'react'
import DailyRight from "../../../../asset/DailyRight.svg"

const index = () => {
  return (
    <div className='xs:mt-10 md:mt-0'>


        <Image src={DailyRight}/>
    </div>
  )
}

export default index