import React from "react";
import hug from "../../../asset/hug.svg";
import Image from "next/image";
import Style from "./service.module.css";
import Arrow from "../../../asset/rightArrow.svg";
import youga from "../../../asset/youga.svg";
import jump from "../../../asset/jump.svg";

const index = () => {
  return (
    <div className={Style.serviceWrapper}>
      <div className="flex bg-inherit  ">
        <Image src={hug} className={Style.icon} />
        <div className={Style.description}>
          <p className="xs:text-[16px] md:text-[20px]">
            Get that 11 line <br></br> in 30 days
          </p>
          <button className="flex">
            Learn more{" "}
            <Image
              src={Arrow}
              className="bg-inherit text-white self-center ml-2"
              width={15}
              height={15}
            />{" "}
          </button>
        </div>
      </div>

      <div className="flex bg-inherit  ">
        <Image src={youga} className={Style.icon} />
        <div className={Style.description}>
          <p className="xs:text-[16px] md:text-[20px]">
            14 Days
            <br></br> sherd challenge
          </p>
          <button className="flex">
            Learn more{" "}
            <Image
              src={Arrow}
              className="bg-inherit text-white self-center ml-2"
              width={15}
              height={15}
            />
          </button>
        </div>
      </div>


      <div className="flex bg-inherit  ">
        <Image src={jump} className={Style.icon} />
        <div className={Style.description}>
          <p className="xs:text-[16px] md:text-[20px]">
          Get flat belly 
            <br></br> in 30 days
          </p>
          <button className="flex">
            Learn more
            <Image
              src={Arrow}
              className="bg-inherit text-white self-center ml-2"
              width={15}
              height={15}
            />
          </button>
        </div>
      </div>



    </div>
  );
};

export default index;
