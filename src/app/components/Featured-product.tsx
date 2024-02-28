"use client";
import React, { Component } from "react";
import { category } from "../data/Data_Products";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Favorite from "./Favorite";

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

interface Product {
  id: number;
  name: string;
  price: number;
  details: string;
  news: string;
  image: any;
  favourite: boolean;
  link: string;
  Description: string;
  numbers: number;
}
export default function Featured_product() {
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);

  useEffect(() => {
    const randomCategoryIndex = getRandomInt(0, category.length - 1);
    const randomCategory = category[randomCategoryIndex];
    const randomProductsFromCategory: Product[] = [];
    while (randomProductsFromCategory.length < 3) {
      const randomProductIndex = getRandomInt(
        0,
        randomCategory.products.length - 1
      );
      const randomProduct = randomCategory.products[randomProductIndex];
      if (
        !randomProductsFromCategory.find(
          (product) => product.id === randomProduct.id
        )
      ) {
        randomProductsFromCategory.push(randomProduct);
      }
    }
    setRandomProducts(randomProductsFromCategory);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-[3rem]">
      <h1 className="text-5xl font-sans font-black text-black mb-20 mt-5 text-center">
        Featured Products
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-10 ">
        {randomProducts.map((product: any, index: any) => (
          <div key={index}>
            <div key={index} className="card w-64 md:w-96  max-w-96 h-[450px]">
              <div className=" relative hover:shadow-2xl duration-700 ">
                <div className=" relative  flex justify-between w-full">
                  <div>
                    {product.news ? (
                      <p className=" absolute left-5 top-5 text-sm bg-[#ffffff] p-1 text-secondary font-normal ">
                        {product.news}
                      </p>
                    ) : null}
                  </div>
                  <Favorite />
                </div>
                <Link
                  href={`products/product-details/${product.link}`}
                  className=" transition-all duration-300 max-w-96"
                >
                  <figure>
                    <Image
                      className="max-w-96"
                      src={product.image}
                      alt={product.name}
                    />
                  </figure>
                </Link>
              </div>
              <div className=" flex flex-col my-3 px-3">
                <div className="flex justify-between">
                  <Link
                    href={`products/product-details/${product.link}`}
                    className="card-title hover:text-primary transition-all duration-300"
                  >
                    <h3>{product.name}</h3>
                  </Link>
                  <p className=" text-secondary">{product.price}$</p>
                </div>

                <p className=" text-sm text-secondary">{product.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16">
        <Link
          href={"/products"}
          className=" text-xs font-sans font-bold text-secondary mt-10 border-b-[1.5px] border-secondary border-opacity-50 pb-1 hover:text-primary transition-all ease-in duration-300"
        >
          VIEW ALL PRODUCTS
        </Link>
      </div>
    </div>
  );
}
