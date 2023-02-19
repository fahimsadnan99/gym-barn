import React from 'react'
import Naike from "../../../../asset/naike.svg"
import Adidas from "../../../../asset/adidas.svg"
import Puma from "../../../../asset/puma.svg"
import Rebook from "../../../../asset/rebook.svg"
import Image from 'next/image'
import Style from "./left.module.css"
import { motion } from 'framer-motion'



const Brand = () => {
  return (
    <div className='pt-8'>
        
        <p className='text-textPrimary font-popins mb-5'>Brands :</p>
        


 <div className={Style.brand} >
  <motion.div whileHover={{scale : 1.5}} transition={{duration : 0.5}}>
      <Image src={Naike} className={Style.naike} alt='nake' />
      </motion.div>
      <motion.div whileHover={{scale : 1.5}} transition={{duration : 0.5}}>
      <Image src={Adidas} className={Style.adidas} alt='adidas' />
      </motion.div>

      <motion.div whileHover={{scale : 1.5}} transition={{duration : 0.5}}>
      <Image src={Puma} className={Style.puma} alt='puma' />
      </motion.div>
      <motion.div whileHover={{scale : 1.5}} transition={{duration : 0.5}}>
      <Image src={Rebook} className={Style.rebook} alt='rebook' />
      </motion.div>



 </div>

        </div>
  )
}

export default Brand