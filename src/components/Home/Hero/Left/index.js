import React from "react";
import Style from "./left.module.css";
import heroBtn1 from "@/asset/heroBtn1.svg";
import Brand from "./Brand";
import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const index = () => {
  return (
    <motion.div initial={{x: -4000}} animate={{x: 0}}  transition={{
      type : "spring",
      stiffness : 60,
    }}>
      <div>
        <motion.p className={Style.heroText} whileHover={{scale : [1,1.2,1,1.2,1,1.2,1]}} transition={{duration : 5}}>
          Healthy in side <span style={{ color: "#8382EB" }}>fresh</span> out side
        </motion.p>
        <p className={Style.heroDescription}>
          Exercise is a very important need for our body. Health and fitness will be obtained if you
          can do regular exercise and run a healthy routine.
        </p>

        <div className={Style.heroBtn}>
          <motion.button className="flex justify-between items-center"
          whileTap={{scale : 0.8}}
          transition={{
            type : "spring"
          }}
          >
            Get started
            <Image
              src={heroBtn1}
              className="rounded-2xl text-bgColor bg-inherit xs:w-[16.25px] xs:h-[16.25px] md:w-auto md:h-auto"
              alt="heroBtn1"
              width={26}
              height={26}
            />
          </motion.button>
          <motion.button whileTap={{scale : 0.8}}
          
          transition={{
            type : "spring"
          }}
          className="flex gap-4 items-center ">
            <AiFillPlayCircle
              className="rounded-full xs:w-[16.25px] xs:h-[16.25px] md:w-[30px] md:h-[30px]"
          
            ></AiFillPlayCircle>
            Learn more
          </motion.button>
        </div>

        <div>
          <Brand></Brand>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
