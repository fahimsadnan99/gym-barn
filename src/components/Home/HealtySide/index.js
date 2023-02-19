import React from 'react'
import {motion} from "framer-motion"

const index = () => {
  return (
    <div className='xs:px-5 md:px-20 my-16 '>
    <div className='grid lg:grid-cols-2'>

           <motion.div initial={{x : 4000}} animate={{x : 0}} transition={{duration : 2,type : "spring",stiffness : 70}}>
            <motion.p whileHover={{scale : [1,1.2,1,1.2,1,1.2,1]}} transition={{duration : 5}} className='xs:text-[28px] md:text-[46px] font-sgr xs:pr-8 md:p-8 text-textPrimary self-center' style={{letterSpacing : "1%"}}>Healthy in side fresh out side</motion.p>
            </motion.div>

<motion.div initial={{x : -4000}} animate={{x : 0}} transition={{duration : 2,type : "spring",stiffness : 70}} className='text-textPrimary xs:mt-4 md:mt-0 opacity-60 self-center xs:text-[12px]  md:text-[16px]'>
Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Healthy life makes you more excited to live the day
</motion.div>
        </div>
        </div>
  )
}

export default index