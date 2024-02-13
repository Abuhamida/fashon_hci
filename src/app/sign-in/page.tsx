"use client";
import Link from "next/link";
import React, { Component } from "react";

export default class page extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center  w-full py-[7rem]">
        <h1 className=" font-extrabold text-7xl text-black">Sign In</h1>
        <div className=" flex flex-col items-center w-screen p-5 md:max-w-[600px] mt-10 gap-7">
        <input type="email" placeholder="Email" className="input input-bordered w-full focus:border-[#8cbbfe] " />
        <input type="password" placeholder="Password" className="input input-bordered w-full " />
        <Link href={''} className=" bg-black rounded-full text-white w-full text-center my-5 py-[13.5px] px-[20px] hover:bg-primary">SIGN IN</Link>
        </div>
        <h2 className="text-[#717275] text-xl font-thin text-center px-7">Don’t have an account? <Link href={'sign-up'} className=" hover:text-primary cursor-pointer">Create One</Link> </h2>
      </div>
    );
  }
}
