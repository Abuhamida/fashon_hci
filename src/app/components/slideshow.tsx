import React from "react";
import Image from "next/image";
import Link from "next/link";
import Data_Slidshow from "../data/Data_Slidshow";
export default function Slideshow() {
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % Data_Slidshow.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleActive = (index: number) => {
    setActive(index);
  };

  return (
    <div className=" relative flex flex-col gap-2 items-center justify-center w-full pb-[3rem] md:pb-[7rem] mt-4">
      {Data_Slidshow.map((slide, index) => (
        <div
          key={index}
          className={`${
            active == index
              ? " fade-out"
              : " hidden"
          } relative max-h-[92vh] overflow-hidden `}
        >
          <Image
            src={slide.img}
            alt={slide.alt}
            className=" object-cover object-center w-screen scale-110 "
          />
          <div className="absolute  top-0 bg-black/20 pl-2 lg:pl-28 w-full h-full select-none flex flex-col gap-5 md:gap-10 justify-center items-start ">
            <div className="flex flex-col gap-2 md:gap-10">
              <p className="text-white text-2xl md:text-7xl text- font-sans font-black ">{slide.title}</p>
              <p className="text-gray-300 text-xl md:text-2xl font-sans font-light max-w-[90%] lg:max-w-[75%] ">{slide.description}</p>
            </div>
            <div>
              <Link href={slide.link_herf} className="bg-black text-white text-sm lg:text-base p-5 rounded-full hover:bg-primary font-bold">{slide.link_text}</Link>
            </div>
          </div>
        </div>
      ))}
      <div className=" absolute right-5 lg:right-28 flex flex-col justify-center items-end w-full h-full gap-5 z-50 ">
        {Data_Slidshow.map((_, index) => (
          <div
            key={index}
            className={` ${
              active == index ? " bg-white border-white" : " border-[#5f5e5e]"
            } w-5 h-5 border-2 md:w-8 md:h-8 rounded-full md:border-4  hover:bg-white hover:border-white cursor-pointer z-50`}
            onClick={() => handleActive(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
