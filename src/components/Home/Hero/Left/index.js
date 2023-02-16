import React from "react";
import Style from "./left.module.css";
import heroBtn1 from "@/asset/heroBtn1.svg";

import Image from "next/image";
import {AiFillPlayCircle} from "react-icons/ai"

const index = () => {
  return (
    <div>
      <div>
        <p className={Style.heroText}>
          Healthy in side <span style={{ color: "#8382EB" }}>fresh</span> out side
        </p>
        <p className={Style.heroDescription}>
          Exercise is a very important need for our body. Health and fitness will be obtained if you
          can do regular exercise and run a healthy routine.
        </p>

        <div className={Style.heroBtn}>
          <button className="flex justify-between items-center">
            Get started{" "}
            <Image
              src={heroBtn1}
              className="rounded-2xl text-bgColor bg-inherit "
              alt="heroBtn1"
              width={26}
              height={26}
            />
          </button>
          <button className="flex gap-4 items-center ">
           <AiFillPlayCircle className="rounded-full" style={{width : "30", height : "30"}}></AiFillPlayCircle>
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;