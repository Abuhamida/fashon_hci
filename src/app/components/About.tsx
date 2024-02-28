"use client";
import React, { useRef, useState, useEffect } from "react";
import into_img from "@/images/pim-chu-z6NZ76_UTDI-unsplash.jpeg";
import Capab_img from "@/images/cody-lannom-G95AReIh_Ko-unsplash.jpeg";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  const div_1 = useRef<HTMLDivElement>(null);
  const div_2 = useRef<HTMLDivElement>(null);
  const div_3 = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    setActive(div_1.current);
  }, []);
  const handleSetActive = (ref: React.RefObject<HTMLDivElement>) => {
    setActive(ref.current);
  };

  const progress = [
    {
      name: "Branding",
      percentage: 90,
    },
    {
      name: "Design & Stragety",
      percentage: 70,
    },
    {
      name: "Online Platform",
      percentage: 80,
    },
  ];

  return (
    <div className=" my-[3rem] lg:my-[5rem] w-full h-full flex flex-col">
      <div className="flex flex-col justify-center items-center text-center w-full h-full mb-10">
        <h1 className="text-3xl lg:text-5xl font-sans font-black text-black">
          Get started with <span className="text-primary">Little</span> Fashion
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:px-40 items-start lg:justify-center lg:items-center w-full h-full px-5">
        <div className=" min-w-max">
          <div
            onClick={() => handleSetActive(div_1)}
            className={`${
              active === div_1.current
                ? " text-primary border-primary transition-all duration-700 ease-out"
                : "text-secondary/50 "
            } cursor-pointer hover:text-primary hover:border-primary border-l-[2px] pl-3 py-2 text-lg font-sans font-bold`}
          >
            Introduction
          </div>
          <div
            onClick={() => handleSetActive(div_2)}
            className={`${
              active === div_2.current
                ? " text-primary border-primary transition-all duration-700 ease-out"
                : "text-secondary/50 "
            } cursor-pointer hover:text-primary hover:border-primary border-l-[2px] pl-3 py-2 text-lg font-sans font-bold`}
          >
            How we work?
          </div>
          <div
            onClick={() => handleSetActive(div_3)}
            className={`${
              active === div_3.current
                ? " text-primary border-primary transition-all duration-700 ease-out"
                : "text-secondary/50 "
            } cursor-pointer hover:text-primary hover:border-primary border-l-[2px] pl-3 py-2 text-lg font-sans font-bold`}
          >
            Capabilites
          </div>
        </div>
        <div className="w-full ">
          <div
            ref={div_1}
            className={` ${
              active === div_1.current ? "fade-out" : "hidden"
            } flex flex-col lg:flex-row justify-center items-center w-full h-full gap-10`}
          >
            <div className="w-screen ">
              <Image src={into_img} alt=""></Image>
            </div>
            <div className="flex flex-col justify-between items-start w-full gap-5">
              <h1 className="font-bold text-4xl font-sans text-black">
                Good <span className=" text-primary">Design</span> <br />
                Ideas for <span className=" text-primary">your</span> fashion
              </h1>
              <div className="w-full flex flex-col gap-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                  nobis dolores molestias inventore. Autem nisi quos inventore,
                  odio similique earum tempora cumque est delectus, deserunt
                  voluptate in ex rem exercitationem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                  nobis dolores molestias inventore. Autem nisi quos inventore,
                  odio similique earum tempora cumque est delectus, deserunt
                  voluptate in ex rem exercitationem.
                </p>
              </div>
              <Link
                href={"/story"}
                className="text-xs font-sans font-bold text-secondary hover:text-primary group transition-all duration-300 ease-out touch-manipulation flex gap-3 w-full items-center mt-8"
              >
                <h3>LEARN MORE ABOUT US</h3>
                <h3 className=" opacity-0 group-hover:opacity-100 text-center transition-all duration-300 ease-int touch-manipulation ">
                  &rarr;
                </h3>
              </Link>
            </div>
          </div>
          <div
            ref={div_2}
            className={` ${active === div_2.current ? "fade-out" : "hidden"}`}
          >
            <div className="flex flex-col lg:flex-row justify-center items-center w-full h-full gap-10">
              <div className="w-screen px-2 h-full ">
                <iframe
                  className="w-full h-full min-h-[400px] "
                  src="https://www.youtube-nocookie.com/embed/f_7JqPDWhfw?controls=0"
                  title="YouTube video player"
                ></iframe>
              </div>
              <div className="w-full flex flex-col justify-between items-start gap-10">
                <h1 className="text-4xl font-sans font-bold text-black">
                  Life at Studio
                </h1>
                <div className="w-full flex flex-col gap-10 text-2xl font-sans font-thin text-secondary/70">
                  <p>
                    Over three years in business, We’ve had the chance to work
                    on a variety of projects, with companies
                  </p>
                  <p>Custom work is branding, web design, UI/UX design</p>
                </div>
                <Link
                  href={"/contact"}
                  className="text-xs font-sans font-bold text-secondary hover:text-primary group transition-all duration-300 ease-out touch-manipulation flex gap-3 w-full items-center mt-8"
                >
                  <h3>WORK WITH US</h3>
                  <h3 className=" opacity-0 group-hover:opacity-100 text-center transition-all duration-300 ease-int touch-manipulation ">
                    &rarr;
                  </h3>
                </Link>
              </div>
            </div>
          </div>
          <div
            ref={div_3}
            className={` ${active === div_3.current ? "fade-out" : "hidden"}`}
          >
            <div className="flex flex-col lg:flex-row justify-center items-center w-full h-full gap-10 ">
              <div className="w-screen px-2">
                <Image src={Capab_img} alt=""></Image>
              </div>
              <div className="w-full flex flex-col justify-between items-start gap-10">
                <h1 className="text-4xl font-sans font-bold text-black">
                  What can help you?
                </h1>
                <div className="w-full flex flex-col gap-10 text-xl font-sans font-thin text-secondary/70">
                  <p>
                    Over three years in business, We’ve had the chance on
                    projects
                  </p>
                  <div className="flex flex-col gap-2 items-center">
                    {progress.map((item, index) => (
                      <div key={index} className="flex gap-5 w-full items-center">
                        <div className="felx flex-col w-full">
                          <h1 className="text-black -mb-3">{item.name}</h1>
                          <progress
                            className="progress w-full h-[1px]"
                            value={item.percentage}
                            max="100"
                          ></progress>
                        </div>
                        <div>
                          <h1 className="text-black text-2xl font-bold">{item.percentage}%</h1>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href={"/products"}
                  className="text-xs font-sans font-bold text-secondary hover:text-primary group transition-all duration-300 ease-out touch-manipulation flex gap-3 w-full items-center mt-8"
                >
                  <h3>EXPLORE PRODUCTS</h3>
                  <h3 className=" opacity-0 group-hover:opacity-100 text-center transition-all duration-300 ease-int touch-manipulation ">
                    &rarr;
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
