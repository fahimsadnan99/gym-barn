import Image from 'next/image'
import React from 'react'
import Style from "./left.module.css"
import WorkOutIcon from "../../../../asset/workout.svg"
import hug  from "../../../../asset/hug.svg"
const index = () => {
  return (
    <div className='xs:mt-12 md:mt-0'>

     <div className='xs:w-[240.53px] xs:h-[286.78px] md:w-[416px] md:h-[496px] mx-auto relative'>
     <Image src={WorkOutIcon} />


     <div className={Style.kickWrapper}>
             <Image src={hug}  className={Style.kickImg} alt="kickIcon"  width={60} height={60}/>
             <div className={Style.KickIcon}>
             <p>800 kall</p> 
              <p>Burn fat</p>
             </div>
      </div>
      
     </div>
        
    </div>
  )
}

export default index