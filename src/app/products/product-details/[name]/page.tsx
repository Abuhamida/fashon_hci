"use client";
import { category } from "@/app/data/Data_Products";
import Favorite from "@/app/components/Favorite";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Product_model from "@/app/components/product_model";

export default function Page({ params }: { params: { name: string } }) {
  const product = category.find((p) =>
    p.products.find((p) => p.link === params.name)
  );
  const category_ = product?.name;
  const selected_product = product?.products.find(
    (p) => p.link === params.name
  );

  const [quantity, setQuantity] = useState<number>(0);

  const handleQuantity = (e: any) => {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue) && inputValue <= (selected_product?.numbers ?? 0)) {
      setQuantity(inputValue);
    }
  };
  const [model_data, setModelData] = useState<object | null | undefined>(null);

  const handelModel = (data: object | undefined) => {
    setModelData(data);
    const modal = document.getElementById(
      "my_modal_2"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <div className=" flex flex-col gap-5 items-start w-full ">
      <Product_model data={model_data} Quantity={quantity} />
      <div className="py-[7rem] bg-accent w-full px-2 md:px-20 font-black leading-tight lg:leading-none ">
        <h1 className=" text-[42px] md:text-[62px] text-primary">
          We provide you
        </h1>
        <h1 className=" text-[42px] md:text-[62px] ">Fashionable Stuffs</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 w-full justify-center py-[3rem] lg:py-[5rem] px-5 lg:px-24 ">
        <div className="w-full">
          <Image src={selected_product?.image ?? ""} alt=""></Image>
        </div>
        <div className="w-full flex flex-col ">
          <div className="flex flex-col gap-2 w-full py-10">
            <div className="flex justify-between w-full items-center">
              <h1 className="text-4xl text-black font-black">
                {selected_product?.name}
              </h1>
              <h3 className=" text-sm text-secondary">
                {selected_product?.price}$
              </h3>
            </div>
            <div>
              <p className=" text-sm text-secondary ">
                {selected_product?.details}
              </p>
            </div>
          </div>
          <div className="flex flex-col py-5">
            <h1 className="text-lg text-black font-bold">Description</h1>
            <p className=" text-2xl text-secondary font-thin font-sans">
              {selected_product?.Description}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row py-3 justify-between gap-5 w-full items-center">
            <select
              title="Quantity"
              className="w-full p-5 border"
              onChange={handleQuantity}
            >
              <option disabled selected>
                Quantity
              </option>
              {selected_product &&
                selected_product.numbers &&
                Array.from({ length: selected_product.numbers }).map(
                  (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  )
                )}
            </select>
            <button
              onClick={() => {
                setModelData(selected_product);
                handelModel(selected_product);
              }}
              className="p-5 bg-black text-white w-full hover:bg-primary text-center"
            >
              ADD TO CART
            </button>
          </div>
          <div className="flex gap-10 text-sm opacity-75 text-secondary font-serif font-thin py-3">
            <Link href={"#"} className=" hover:text-primary ">
              Details
            </Link>
            <Link href={"#"} className=" hover:text-primary ">
              Delivery and Payment
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-full h-[1px] opacity-30 bg-secondary"></div>
      <div className="py-[5rem] px-10 lg:px-24">
        <h1 className="mb-16 text-4xl text-black font-bold">
          You might also like
        </h1>
        <div className="">
          {category.map((item, index) =>
            item.name === category_ ? (
              <div
                className="flex flex-wrap justify-center items-center gap-10"
                key={index}
              >
                {item.products.map((product, index) => (
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
                        href={`${product.link}`}
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
                          href={`${product.link}`}
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
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
