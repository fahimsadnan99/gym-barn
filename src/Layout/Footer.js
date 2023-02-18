import React from "react";
import Img from "../asset/img.svg";
import Image from "next/image";

const program = ["Workout", "Gym", "Cardio", "Zumba"];
const Blog = ["Daily stretch", "Daily workout"];
const AboutUs = ["Support", "Contact", "Address"];

const Footer = () => {
  return (
    <div className="bg-bgColor xs:p-10 md:p-20">
      <div className="xs:w-[95%] md:w-[85%] mx-auto grid xs:grid-cols-1 md:grid-cols-5 ">
        <div className="col-span-2 xs:mb-10 md:mb-0">
          <div className="font-sgr">
            <span className="text-iconBgColor px-2 py-1  bg-white rounded-lg">Gym</span>{" "}
            <span className="text-white">baran</span>
          </div>
          <p className="font-popins opacity-60 text-white xs:pr-10 md:pr-28 my-12">
            We take care of your health with regular and fun exercise
          </p>

          <div className="flex space-x-6">
            {Array(5)
              .fill(0)
              .map((item, index) => {
                return <Image src={Img} key={index} className="bg-white cursor-pointer" />;
              })}
          </div>
        </div>

        <div className="xs:mb-10 md:mb-0 xs:col-span-2 md:col-span-1">
          <p className="font-sgr text-white">Program</p>
          <ul className="text-white font-thin cursor-pointer   opacity-60 font-popins space-y-4 mt-8">
            {program?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>

        <div className="xs:mb-10 md:mb-0 xs:col-span-2 md:col-span-1">
          <p className="font-sgr text-white">Blog</p>
          <ul className="text-white font-thin cursor-pointer   opacity-60 font-popins space-y-4 mt-8">
            {Blog?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>

        <div>
          <p className="font-sgr text-white">About Us</p>
          <ul className="text-white font-thin cursor-pointer   opacity-60 font-popins space-y-4 mt-8">
            {AboutUs?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
