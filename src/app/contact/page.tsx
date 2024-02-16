/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import header_img from "@/images/header/positive-european-woman-has-break-after-work.jpg";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function page() {
  return (
    <div className=" flex flex-col items-start w-full h-full">
      <div className="flex flex-col lg:flex-row bg-accent">
        <div className="py-[7rem] w-full px-2 md:px-20 font-black leading-none">
          <h1 className=" text-[42px] md:text-[62px] text-primary">
            Say hello to us
          </h1>
          <h1 className=" text-[42px] md:text-[62px] ">love to hear you</h1>
        </div>
        <div>
          <Image src={header_img} alt="" className="w-full h-full"></Image>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-10 w-full py-[4rem] lg:py-[7rem] px-2 md:px-20">
        <div className="flex flex-col gap-8 w-full">
          <div className="">
            <h1 className=" text-[42px] leading-none font-black">
              Let's <span className=" text-primary">begin</span>
            </h1>
          </div>
          <div className="flex flex-col gap-6 items-start ">
            <input
              type="name"
              placeholder="Full Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <input
              type="subject"
              placeholder="Subject"
              className="input input-bordered w-full"
            />
            <textarea
              className="textarea textarea-bordered min-h-32 w-full"
              placeholder="Tell us about the project"
            ></textarea>
            <Link
              href={""}
              className=" bg-black font-bold rounded-full text-white w-56 text-center my-5 py-[13.5px] px-[20px] hover:bg-primary"
            >
              SEND
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center lg:justify-center w-full px-2 lg:px-10 ">
          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 w-full lg:gap-16 items-center">
            <div className="flex flex-col gap-3 items-start justify-center lg:h-40 mb-3 lg:mt-0 lg:mb-0">
              <div className="font-bold text-xl">New Business</div>
              <div className=" text-secondary hover:text-primary">
                <Link href={""}>HELLO@COMPANY.COM</Link>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-center lg:h-40 mb-3 lg:mt-0 lg:mb-0">
              <div className="font-bold text-xl">Main Studio</div>
              <div className=" text-secondary hover:text-primary">
                <Link href={""}>STUDIO@COMPANY.COM</Link>
              </div>
            </div>
          </div>
          <div className=" hidden lg:block bg-secondary/50 h-[0.2px] w-96 rotate-90"></div>
          <div className=" bg-secondary/50 h-[0.2px] w-full "></div>
          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 w-full lg:gap-16 items-center">
            <div className="flex flex-col gap-3 items-start justify-center lg:h-40 mb-3 mt-3 lg:mt-0 lg:mb-0">
              <div className="font-bold text-xl">Our Office</div>
              <div className=" text-secondary">Akershusstranda 20, 0150 Oslo, Norway</div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-center lg:h-40 mb-3 lg:mt-0 lg:mb-0">
              <div className="font-bold text-xl">Our Socials</div>
              <div className="flex gap-4 text-secondary ">
                <Link href={""}>
                  <FaFacebookMessenger className="hover:text-primary" />
                </Link>
                <Link href={""}>
                  <FaYoutube className="hover:text-primary" />
                </Link>{" "}
                <Link href={""}>
                  <FaInstagram className="hover:text-primary" />
                </Link>{" "}
                <Link href={""}>
                  <FaWhatsapp className="hover:text-primary" />
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
