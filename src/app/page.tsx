"use client";
import Image from "next/image";
import Slideshow from "./components/slideshow";
import About from "./components/About";
import Front_product from "./components/Front-product";
import Featured_product from "./components/Featured-product";
export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <Slideshow />
      <About />
      <Front_product />
      <Featured_product />
    </main>
  );
}
