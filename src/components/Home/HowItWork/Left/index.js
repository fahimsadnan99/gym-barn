import React from 'react'
import HowItWorks from "../../../../asset/howItWork.svg"
import Image from 'next/image'

const index = () => {
  return (
    <div  >

        <Image src={HowItWorks} className=' md:w-[415px]  md:h-[408px] mx-auto xs:mt-8 md:mt-0'/>
    </div>
  )
}

export default index