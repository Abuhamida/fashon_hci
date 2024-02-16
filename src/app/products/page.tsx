import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import data from "@/app/data/Data";
export default function page() {
  return (
    <div className="flex flex-col">
      <div className="py-[7rem] bg-accent w-full px-2 md:px-20 font-black leading-none">
        <h1 className=" text-[42px] md:text-[62px] text-primary">
          Choose your
        </h1>
        <h1 className=" text-[42px] md:text-[62px] ">favorite stuffs</h1>
      </div>
      <div className="grid grid-rows-2 py-[4rem] lg:py-[7rem]">
        {data.map((category, index) => (
          <div key={index}>
            <div className="flex flex-col gap-5 ">
              <div className=" ml-3 lg:ml-28  ">
                <h2 className=" text-4xl font-black text-black mb-8 mt-10">
                  {category.category}
                </h2>
              </div>
              <div className="flex flex-wrap items-center justify-center md:gap-7">
                {category.products.map((product, index) => (
                  <div key={index} className="card w-64 md:w-96  max-w-96 h-[450px]">
                    <div className=" shadow-2xl ">
                      <Link
                        href={`products/product-details/${product.name}`}
                        className=" hover:shadow-2xl transition-all duration-300 max-w-96"
                      >
                        <div className="absolute px-5 top-5 flex justify-between w-full">
                          <div>
                            {product.news ? (
                              <p className=" text-sm bg-[#ffffff] p-1 text-secondary font-normal ">
                                {product.news}
                              </p>
                            ) : null}
                          </div>
                          <div className="text-white hover:text-primary">
                            <FaHeart />
                          </div>
                        </div>
                        <figure>
                          <Image
                            className="max-w-96"
                            src={require(`@/images/product/${product.image}`)}
                            alt={product.name}
                          />
                        </figure>
                      </Link>
                    </div>
                    <div className=" flex flex-col my-3 px-3">
                      <div className="flex justify-between">
                        <Link
                          href={`products/product-details/${product.name}`}
                          className="card-title hover:text-primary transition-all duration-300"
                        >
                          <h3>{product.name}</h3>
                        </Link>
                        <p className=" text-secondary">{product.price}$</p>
                      </div>

                      <p className=" text-sm text-secondary">{product.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
