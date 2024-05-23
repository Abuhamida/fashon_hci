/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import header_img from "@/images/header/businesspeople-meeting-office-working.jpg";
import { FaInfoCircle } from "react-icons/fa";
import { Data } from "@/app/data/Data_story";
import Story_model from "../components/Story_model";
import { useState } from "react";
import Testimonial from "../components/Testimonial";
export default function page() {
  const [model_data, setModelData] = useState<number | null>(null);

  const handelModel = (index: number) => {
    setModelData(index);
    const modal = document.getElementById(
      "my_modal_2"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className=" flex flex-col">
      <Story_model index={model_data} />
      <div className=" flex flex-col items-start w-full h-full">
        <div className="flex flex-col lg:flex-row bg-accent">
          <div className="py-[7rem] w-full px-2 md:px-20 font-black leading-none">
            <h1 className=" text-[42px] md:text-[62px] text-primary">
              Company
            </h1>
            <h1 className=" text-[42px] md:text-[62px] ">Fashion</h1>
          </div>
          <div>
            <Image src={header_img} alt="" className="w-full h-full"></Image>
          </div>
        </div>
      </div>
      <div className=" bg-white_gray min-h-96 flex flex-col justify-center items-start gap-12 w-full px-2 md:px-32 py-10">
        <div className="pt-5 px-5 lg:pt-0 lg:px-0">
          <h1 className=" text-4xl font-black ">
            Meet our <span className=" text-primary">team</span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 w-full ">
          {Data.map((item, index) => (
            <div
              key={index}
              className=" rounded-md min-h-40 bg-white w-11/12 lg:w-96 flex items-center p-5 justify-between"
            >
              <div className="flex gap-4 items-center">
                <Image
                  src={item.Image}
                  alt=""
                  className="w-20 h-20 rounded-full"
                ></Image>
                <div className="flex flex-col items-start">
                  <h1 className=" text-2xl font-bold ">{item.Name}</h1>
                  <h1 className=" text-base font-bold text-secondary">
                    {item.position}
                  </h1>
                </div>
              </div>
              <div
                className=" bg-white_gray text-white hover:text-black p-3 cursor-pointer rounded-md"
                onClick={() => {
                  setModelData(index);
                  handelModel(index);
                }}
              >
                <FaInfoCircle />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Testimonial />
    </div>
  );
}
