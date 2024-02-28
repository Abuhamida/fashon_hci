import Link from "next/link";
import React, { Component } from "react";
import { FaSkype } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer p-[12px] md:px-16 lg:px-20  bg-black text-[#6c757d] py-[80px] min-h-[392px] flex flex-col lg:flex-row justify-between items-center text-lg ">
        <aside className="flex flex-col justify-between gap-16 items-start w-full lg:max-w-max">
          <h1 className=" text-3xl font-bold focus:text-red-600 ">
            <span className=" hover:text-primary cursor-pointer translate-x-2 duration-700">
              Little
            </span>
            <span className=" text-white"> Fashion</span>
          </h1>
          <div className="flex flex-col gap-10">
            <h2 className=" -mt-12 lg:mt-0">Copyright © 2022 <span className=" font-bold">Little Fashion</span> </h2>
            <h2>Devoleped By AbuHmaida</h2>
          </div>
        </aside>
        <div className="flex  w-full items-start justify-between lg:justify-center  gap-16 md:gap-40 ">
          <nav className="flex flex-col gap-10 items-start ">
            <h6 className=" text-white text-2xl font-semibold">Sitemap</h6>
            <div className="flex w-full items-start gap-5 md:gap-32 justify-between">
              <div className="flex flex-col gap-3">
                <Link href={""} className=" hover:text-white transition-all translate-x-2 duration-150 ">
                  Story
                </Link>
                <Link href={""} className=" hover:text-white transition-all translate-x-2 duration-150 ">
                  Privacy policy
                </Link>
                <Link href={""} className=" hover:text-white transition-all translate-x-2 duration-150 ">
                  Contact
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <Link href={""} className=" hover:text-white transition-all translate-x-2 duration-150 ">
                  Products
                </Link>
                <Link href={""} className=" hover:text-white transition-all translate-x-2 duration-150 ">
                  FAQs
                </Link>
              </div>
            </div>
          </nav>
          <nav className="flex flex-col gap-10 items-start md:min-w-36">
            <h6 className=" text-white text-2xl font-semibold ">Social</h6>
            <div className="flex flex-wrap gap-5">
              <Link href={""} className=" hover:text-white transition-all translate-x-2 duration-150 ">
                <FaYoutube />
              </Link>
              <Link href={""} className=" hover:text-white transition-all translate-x-2 duration-150 ">
                <FaWhatsapp />
              </Link>
              <Link href={""} className=" hover:text-white transition-all translate-x-2 duration-150 ">
                <FaInstagram />
              </Link>
              <Link href={""} className=" hover:text-white transition-all translate-x-2 duration-150 ">
                <FaSkype />
              </Link>
            </div>
          </nav>
        </div>
      </footer>
    );
  }
}
