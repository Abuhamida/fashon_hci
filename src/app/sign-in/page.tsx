"use client";
import Link from "next/link";
import React, { Component } from "react";
import { useState } from "react";
import { FormEvent } from "react";

export default function page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      if (response.ok) {
        
      }
    } catch (error) {}
  };

  return (
    <div className="flex flex-col items-center justify-center  w-full py-[7rem]">
      <form onSubmit={login}>
        <h1 className=" font-extrabold text-7xl text-black">Sign In</h1>
        <div className=" flex flex-col items-center w-screen p-5 md:max-w-[600px] mt-10 gap-7">
          <input
            type="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="input input-bordered w-full focus:border-[#8cbbfe] "
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="input input-bordered w-full "
          />
          <button
            type="submit"
            className=" bg-black rounded-full text-white w-full text-center my-5 py-[13.5px] px-[20px] hover:bg-primary"
          >
            SIGN IN
          </button>
        </div>
        <h2 className="text-[#717275] text-xl font-thin text-center px-7">
          Don’t have an account?{" "}
          <Link href={"sign-up"} className=" hover:text-primary cursor-pointer">
            Create One
          </Link>{" "}
        </h2>
      </form>
    </div>
  );
}
