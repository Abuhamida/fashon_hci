'use client'
import React, { useState } from "react";
import { Data_testimonial } from "@/app/data/Data_story";
import { ImQuotesLeft } from "react-icons/im";
import Image from "next/image";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
function Testimonial() {
  

  return (
    <div className="flex flex-col items-center justify-center w-full py-[3rem] md:py-[7rem]">
      <h1 className="text-[36px] md:text-5xl font-black text-black text-center leading-tight">
        Customer love, <br />
        <span className=" text-primary">Little </span>Fashion
      </h1>
      <Swiper
        modules={[ Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        className=" flex container relative max-w-[900px] w-full  px-5 h-auto  min-h-[300px] m-auto "
      >
        {Data_testimonial.map((item, index) => (
          <SwiperSlide key={index} className="flex flex-col justify-center items-center">
            <div
              className={`h-full flex flex-col mt-[3rem] md:px-20 relative justify-center items-center`}
            >
              <ImQuotesLeft className=" absolute left-0 top-0 text-5xl text-primary" />
              <div className="w-[90%] md:w-full  flex flex-col jmd:items-start  gap-10 py-16 px-10">
                <div className=" w-full text-2xl  text-secondary opacity-50 ">
                  <p className="text-left text-[16px] md:text-xl font-thin  md:text-center cursor-default ">{item.rate}</p>
                </div>
                <div className="w-full flex items-center  gap-5 ">
                  <div className=" min-w-fit">
                    <Image
                      src={item.image}
                      alt=""
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full"
                    ></Image>
                  </div>
                  <div >
                    <div className="">
                      {item.name},
                      <span className=" font-bold text-[#6c757d]">
                        {item.work}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
}

export default Testimonial;
