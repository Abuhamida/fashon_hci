"use client";

import React, { Component } from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function page () {
   {
    return (
      <div className="  flex flex-col justify-center items-center py-[7rem]">
        <h1 className=" font-extrabold text-7xl text-black">Sign Up</h1>
        <div className="flex flex-col w-96 my-16 gap-10">
          <Link
            href={""}
            className="  rounded-full border-2 w-full text-center py-[13.5px] px-[20px] hover:bg-primary hover:text-white flex items-center justify-center gap-3"
          >
            <FaGoogle /> <span>SIGN IN</span>
          </Link>
          <Link
            href={""}
            className="  rounded-full border-2 w-full text-center py-[13.5px] px-[20px] hover:bg-primary hover:text-white flex items-center justify-center gap-3"
          >
            <FaFacebook />
            <span>SIGN IN</span>
          </Link>
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-96 h-[0.01rem]  bg-gray-200 border-0 rounded dark:bg-gray-700 opacity-50" />
          <div className="absolute px-2 -translate-x-2/4 bg-white left-1/2 font-bold text-sm ">
            OR
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div className=" flex flex-col items-center w-screen p-5 md:max-w-[600px] mt-10 gap-7">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full focus:border-[#8cbbfe] "
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full "
            />
            <label className="text-[#717275] -mt-6 text-xl font-thin">* shall include 0-9 a-z A-Z in 4 to 10 characters</label>
            <input
              type="password confirm"
              placeholder="Password Confirm"
              className="input input-bordered w-full "
            />
            <Link
              href={""}
              className=" bg-black rounded-full text-white w-full text-center my-5 py-[13.5px] px-[20px] hover:bg-primary"
            >
              CREATE ACOUNT
            </Link>
          </div>
          <h2 className="text-[#717275] text-xl font-thin">
            Already have an account? Please &nbsp;
            <Link
              href={"sign-in"}
              className=" hover:text-primary cursor-pointer"
            >
              Sign In
            </Link>
          </h2>
        </div>
      </div>
    );
  }
}
