import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import img from "@/images/retail-shop-owner-mask-social-distancing-shopping.jpg";

export default function Front_product() {
  return (
    <div className="my-10">
      <div className="flex flex-col justify-center h-auto w-full items-center lg:flex-row bg-accent">
        <div className="w-full">
          <Image src={img} alt="" className="w-full "></Image>
        </div>
        <div className="py-[7rem] w-full px-2 md:px-20  flex flex-col gap-10">
          <h1 className=" text-[42px] md:text-4xl text-black font-black ">
           <span className=" text-primary">Retail</span>  shop owners
          </h1>
          <p className="text-2xl font-sans font-thin  text-secondary">Credits go to Unsplash and FreePik websites for images used in this Little Fashion by Tooplate.</p>
          <Link href={'/products'} className="text-xs font-sans font-bold text-secondary hover:text-primary group transition-all duration-300 ease-out touch-manipulation flex gap-3 w-full items-center">
             <h3>EXPLORE PRODUCTS</h3>
             <h3 className=" opacity-0 group-hover:opacity-100 text-center transition-all duration-300 ease-int touch-manipulation ">&rarr;</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
