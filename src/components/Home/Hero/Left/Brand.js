import React from 'react'
import Naike from "../../../../asset/naike.svg"
import Adidas from "../../../../asset/adidas.svg"
import Puma from "../../../../asset/puma.svg"
import Rebook from "../../../../asset/rebook.svg"
import Image from 'next/image'
import Style from "./left.module.css"



const Brand = () => {
  return (
    <div className='pt-3'>
        
        <p className='text-textPrimary font-popins'>Brands :</p>
        


 <div className={Style.brand}>
      <Image src={Naike} className={Style.naike} alt='nake' />
      <Image src={Adidas} className={Style.adidas} alt='adidas' />
      <Image src={Puma} className={Style.puma} alt='puma' />
      <Image src={Rebook} className={Style.rebook} alt='rebook' />



 </div>

        </div>
  )
}

export default Brand