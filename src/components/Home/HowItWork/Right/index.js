import React, { useState } from 'react'


const list = ["The body becomes sick because of rarely exercise", "Don't give up in order to get a healthy and ideal body", "Become addicted to the exercise that is given" ]
const index = () => {
  const [getIndex,setIndex] = useState(0)
  return (
    <div className='  justify-self-start xs:order-first md:order-last mb-0'>


      <p className='text-textPrimary xs:font-sgb md:font-sgr xs:text-[28px] md:text-[46px] mt-12'>How it works?</p>


<div className='mt-4'>

  <ul className='justify-start space-y-3'>
    {list?.map((item,index)=>{
      return <li onClick={()=> setIndex(index)} key={index} className={`p-4 shadow shadow-black/40  rounded-lg font-popins transition-all ease-in-out duration-300 ${getIndex == index ? "opacity-100 shadow-2xl" : "opacity-50"}`}>{item}</li>
    })}
  </ul>
</div>


    </div>
  )
}

export default index