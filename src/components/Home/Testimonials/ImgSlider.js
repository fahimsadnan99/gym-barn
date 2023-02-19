import React, { useEffect, useState } from "react";
import Quote from "../../../asset/qute.svg";
import Image from "next/image";
import t1 from "../../../asset/t1.svg";
import {GoPrimitiveDot} from "react-icons/go"
import { motion } from "framer-motion";

const quoteItem = [
    {
      text : ` It's great to be able to work out from home and be helped by the gymbaran. My day
      feels fresher when I regularly participate in this fun sport. Good luck to the
      coaches.`,
      name : "Suketi Mantapo",
      designation : "Designer Graphic"
    },
    {
      text : `  exercise used to be a boring thing for me, but after following the gymbaran I became fond of sports and sports became my new hobby. I participate in sports 5 times a week.`,
      name : "Ada Apose",
      designation : "Programmer"
    },
    {
      text : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
      name : "Mr Jhon",
      designation : "Social Engineer"
    },
    {
      text : `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.`,
      name : "Dr Selva",
      designation : "Digital Marketer"
    },
  ]
  




const ImgSlider = () => {
    const [currentSlider,setCurentSlider] = useState(0)
    const [nextSlider,setNextSlider] = useState(1)
 

    const handleSlider =(index)=>{
        setCurentSlider(index)
        if(currentSlider == quoteItem.length -1) setNextSlider(quoteItem.length -1)
        else setNextSlider(index + 1)
    }
  return (
    <div>
    <div className="grid md:grid-cols-2 gap-6"> 
    {
    quoteItem?.map(({text,name,designation},index) =>{
        return (
               <>
                {
            currentSlider == index && (
                <motion.div initial={{scale : 0.6, opacity : 0.4}} animate={{scale : 1,opacity : 1}} transition={{duration : 1}} className="xs:w-full md:w-[90%] xs:p-10 md:p-12 shadow-2xl">
                <div className="flex">
                  <Image src={Quote} className="self-start" />
                  <p className="font-popins opacity-50 text-textPrimary xs:text-[12px] md:text-[16px]">
                    {text}
                  </p>
                </div>
        
                <div className="flex mt-8">
                  <Image src={t1} className="xs:w-[33px] xs:h-[36px] md:w-[64px] md:h-[69px] " />
        
                  <div className="font-popins text-textPrimary md:text-[16px] self-start space-y-2 ml-6">
                    <p className="font-bold xs:text-[14px]">{name}</p>
                    <p className="opacity-50 xs:text-[12px]">{designation}</p>
                  </div>
                </div>
              </motion.div>
           
            ) 
          
        }
               </>
            )
        })
    }


{
    quoteItem?.map(({text,name,designation},index) =>{
        return (
               <>
                {
            nextSlider ==  index && (
                <div className="xs:w-full md:w-[90%] xs:p-10 md:p-12 shadow-2xl">
                <div className="flex">
                  <Image src={Quote} className="self-start" />
                  <p className="font-popins opacity-50 text-textPrimary xs:text-[12px] md:text-[16px]">
                    {text}
                  </p>
                </div>
        
                <div className="flex mt-8">
                  <Image src={t1} className="xs:w-[33px] xs:h-[36px] md:w-[64px] md:h-[69px] " />
        
                  <div className="font-popins text-textPrimary md:text-[16px] self-start space-y-2 ml-6">
                    <p className="font-bold xs:text-[14px]">{name}</p>
                    <p className="opacity-50 xs:text-[12px]">{designation}</p>
                  </div>
                </div>
              </div>
           
            ) 
          
        }
               </>
            )
        })
    }
      </div>
    <div className="flex item-center  xs:justify-center md:justify-end opacity-60 my-10">
        {quoteItem?.map((item,index)=>{
            return <GoPrimitiveDot className="cursor-pointer"
            onClick={()=>handleSlider(index)}
            ></GoPrimitiveDot>
        })}
    </div>
    </div>
  );
};

export default ImgSlider;
