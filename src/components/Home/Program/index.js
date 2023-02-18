import React from "react";
import Program0 from "../../../asset/Program1.svg";
import Program1 from "../../../asset/Program2.svg";
import Program2 from "../../../asset/Program3.svg";
import Program3 from "../../../asset/Program4.svg";
import Program4 from "../../../asset/Program5.svg";
import Program5 from "../../../asset/Program6.svg";
import Image from "next/image";
import Style from "./program.module.css";

const list = [
    {
        img : Program0,
        head : "Gets ABS in 2 weeks"
    },
    {
        img : Program1,
        head : "25 Mins full body workout"
    },
    {
        img : Program2,
        head : "10 Mins toned arms workout"
    },
    {
        img : Program3,
        head : "15 Mins full body fat burn"
    },
    {
        img : Program4,
        head : "25 Mins HIIT workout"
    },
    {
        img : Program5,
        head : "Intense lower Abs workout"
    }
];

const index = () => {
  
  return (
    <div className="w-[85%] mx-auto my-12 ">
      <p className="xs:font-sgb md:font-sgr text-center xs:text-[28px] md:text-[46px] xs:my-10 md:my-0 md:w-[558px] md:mb-8 mx-auto flex items-center justify-center">Programs that can be taken</p>

      <div className="grid xs:grid-cols-1 md:grid-cols-3  xs:space-y-10 md:space-y-10">

        {
            list?.map(({img,head},index)=>{
                return (
<div className={`flex justify-around items-center md:mx-10 ${index == 0 ? "md:mt-7" : ""} `} key={index}>
          <Image
            src={img}
            className="w-[60px] h-[60px] p-2.5 rounded-full justify-items-center"
            style={
              (index == 0 && { backgroundImage: "linear-gradient(to right, #5478EF,#D6DFFF)" }) ||
              (index == 1 && { backgroundImage: "linear-gradient(to right, #4BACE1,#D8F1FF)" }) ||
              (index == 2 && { backgroundImage: "linear-gradient(to right, #DD69C7,#FFC0F3)" }) ||
              (index == 3 && { backgroundImage: "linear-gradient(to right, #DD69C7,#FFC0F3)" }) ||
              (index == 4 && { backgroundImage: "linear-gradient(to right, #5478EF,#D6DFFF)" }) ||
              (index == 5 && { backgroundImage: "linear-gradient(to right, #4BACE1,#D8F1FF)" })
            }
            width={60}
            height={60}
          />

          <div className="px-4">
            <p className="font-popins font-bold text-textPrimary">{head}</p>
            <p className={`font-popins xs:text-[14px] md:text-[16px]  opacity-50 `} style={{ lineHeight: "28px" }}>
              Exercise is a very important need for our body.
            </p>
          </div>
        </div>
                )
            })
        }
        
      </div>
    </div>
  );
};

export default index;
