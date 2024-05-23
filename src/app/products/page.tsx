/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Favorite from "../components/Favorite";
import { getProducts } from "@/app/data/Data_Products";
interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  image: string;
  rating: { rate: number; count: number };
}
export default function page() {
  const [products, setProducts] = useState<Product[]>([]); // Use the Product interface as the type for products

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    fetchProducts(); // Call the async function
  }, []);

  return (
    <div className="flex flex-col">
      <div className="py-[7rem] bg-accent w-full px-2 md:px-20 font-black leading-none">
        <h1 className=" text-[42px] md:text-[62px] text-primary">
          Choose your
        </h1>
        <h1 className=" text-[42px] md:text-[62px] ">favorite stuffs</h1>
      </div>
      <div className="flex flex-col items-center w-full py-[4rem] lg:py-[7rem]">
        {/* Group products by category and map over categories */}
        {Object.entries(
          products.reduce((acc: Record<string, Product[]>, product) => {
            if (!acc[product.category]) {
              acc[product.category] = [];
            }
            acc[product.category].push(product);
            return acc;
          }, {} as Record<string, Product[]>)
        ).map(([category, categoryProducts]) => (
          <div
            key={category}
            className=" flex flex-col justify-center items-center"
          >
            <h2 className=" text-4xl font-black text-black mb-8 mt-10">
              {category}
            </h2>
            {/* Map products within the current category */}
            <div className="flex flex-wrap justify-center items-center gap-10">
              {categoryProducts.map((item: Product, index) => (
                <div
                  key={index}
                  className="card w-64 md:w-96  max-w-96 h-[450px]  overflow-hidden py-2"
                >
                  <div className=" relative hover:shadow-2xl duration-700 bg-contain h-56 group cover bg-center bg-no-repeat py-3 rounded-md "
                  
                  style={{
                      backgroundImage:`url(${item.image})`,
                      height: "500px",
                    }}
                  >
                    <div className=" relative  flex justify-between w-full ">
                      {/* <div>
                    {item.news ? (
                      <p className=" absolute left-5 top-5 text-sm bg-[#ffffff] p-1 text-secondary font-normal ">
                        {item.news}
                      </p>
                    ) : null}
                  </div> */}

                      <Favorite />
                    </div>
                    <Link
                      href={`products/product-details/${item.id}`}
                      className=" transition-all duration-300 max-w-96 "
                    >
                      <figure className="max-w-96 w-56 h-56 ">
                        
                      </figure>
                    </Link>
                  </div>
                  <div className=" flex flex-col my-3 px-3">
                    <div className="flex justify-between">
                      <Link
                        href={`products/product-details/${item.id}`}
                        className="card-title hover:text-primary group-hover:text-primary  transition-all duration-300"
                      >
                        <h3>{item.title}</h3>
                      </Link>
                      <p className=" text-secondary">{item.price}$</p>
                    </div>

                    <p className=" text-sm text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* {category.map((category, index) => (
          <div key={index}>
            <div className="flex flex-col gap-5 ">
              <div className=" ml-3 lg:ml-28  ">
                <h2 className=" text-4xl font-black text-black mb-8 mt-10">
                  {category.name}
                </h2>
              </div>
              <div className="flex flex-wrap items-center justify-center md:gap-7">
                {category.products.map((product, index) => (
                  <div
                    key={index}
                    className="card w-64 md:w-96  max-w-96 h-[450px]"
                  >
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

                      <p className=" text-sm text-secondary">
                        {product.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))} */}
    </div>
  );
}
