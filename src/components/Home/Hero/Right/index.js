import React from "react";
import Style from "./right.module.css";
import HeroModel from "../../../../asset/heroModel.svg";
import Image from "next/image";
import kickIcon from "../../../../asset/heroKickIcon.svg"
import PushUp from "../../../../asset/PushUp.svg"
import Stand from "../../../../asset/Stand.svg"
import ImageIcon from "../../../../asset/imageIcon.svg"


const index = () => {
  return (
    <div className="w-full  xs:mt-14">
      <div className={Style.HeroImg}>
        <Image className="mx-auto" src={HeroModel} width={358} height={580} />
      


      <div className={Style.kickWrapper}>
             <Image src={kickIcon}  className={Style.kickImg} alt="kickIcon"  width={60} height={60}/>
             <div className={Style.KickIcon}>
             <p>150 +</p> 
              <p>Members</p>
             </div>
      </div>


      <Image className={Style.push}  width={35} height={35} src={PushUp} alt="push"/>
      <Image className={Style.stand}  src={Stand} alt="push"/>

      <div className={Style.ImgSection}>
      <Image className={Style.ImgIcon}  src={ImageIcon} alt="img"/>
       <p>Zaqky Simorang</p>
       <p>Trainer</p>
      </div>
    </div>
    </div>
  );
};

export default index;
