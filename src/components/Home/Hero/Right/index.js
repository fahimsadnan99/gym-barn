import React from "react";
import Style from "./right.module.css";
import HeroModel from "../../../../asset/heroModel.svg";
import Image from "next/image";
import kickIcon from "../../../../asset/heroKickIcon.svg";
import PushUp from "../../../../asset/PushUp.svg";
import Stand from "../../../../asset/Stand.svg";
import ImageIcon from "../../../../asset/imageIcon.svg";
import { motion } from "framer-motion";

const index = () => {
  return (
    <motion.div
      className="w-full  xs:mt-14"
      initial={{ x: 4000 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 60, duration: 1.5 }}
    >
      <div className={Style.HeroImg}>
        <Image className="mx-auto" src={HeroModel} width={358} height={580} />

        <motion.div
          className={Style.kickWrapper}
          cy={200}
          animate={{ scale: [null, 1.2, 1] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 3 }}
        >
          <Image src={kickIcon} className={Style.kickImg} alt="kickIcon" width={60} height={60} />
          <div className={Style.KickIcon}>
            <p>150 +</p>
            <p>Members</p>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [null, 20, 0] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 3 }}
        >
          <Image className={Style.push} width={35} height={35} src={PushUp} alt="push" />
        </motion.div>

        <Image className={Style.stand} src={Stand} alt="push" />

        <motion.div
          className={Style.ImgSection}
          animate={{ scale: [null, 0.7, 1] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 3 }}
        >
          <Image className={Style.ImgIcon} src={ImageIcon} alt="img" />
          <p>Zaqky Simorang</p>
          <p>Trainer</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;
