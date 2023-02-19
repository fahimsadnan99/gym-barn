import React from "react";
import Style from "./left.module.css";
import Arrow from "../../../../asset/rightArrow.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const index = () => {
  return (
    <div className="order-first">
      <p className={Style.header}>Daily morning workout in home</p>

      <p
        className="font-popins text-textPrimary xs:opacity-60 md:opacity-50 pr-16 xs:text-[12px] md:text-[16px] my-5"
        style={{ lineHeight: "28px" }}
      >
        Exercise is a very important need for our body. Health and fitness will be obtained if you
        can do regular exercise and run a healthy routine. Even at home we still have to be diligent
        in exercising, either alone or with your friends at home.{" "}
      </p>

      <motion.div whileTap={{ scale: 0.4 }} transition={{ duration: 0.5 }}>
        <button className="flex bg-bgColor text-white xs:w-[176px] md:w-[246px] xs:h-[40px] md:h- [52px] rounded-lg justify-around items-center">
          Get started{" "}
          <Image src={Arrow} className="bg-inherit text-white self-center" width={18} height={18} />
        </button>
      </motion.div>
    </div>
  );
};

export default index;
