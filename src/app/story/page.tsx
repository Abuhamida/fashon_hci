import Image from "next/image";
import Link from "next/link";
import header_img from "@/images/header/businesspeople-meeting-office-working.jpg"
import { FaCirclePlus } from "react-icons/fa6";

export default function page() {
  return (
    <div className="">
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
    </div>
  )
}
