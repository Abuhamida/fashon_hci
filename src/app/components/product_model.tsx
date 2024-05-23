"use client";
import React from "react";
import { Data } from "../data/Data_story";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";

const Product_model = ({ data, Quantity }: { data: any; Quantity: number }) => {
  const handelADD = () => {
    toast.success("Product Added to Cart Successfully ", {});
  };
  return (
    <div className="">
      {data && (
        <dialog id="my_modal_2" className="modal ">
          <div className="modal-box max-h-full min-h-40 max-w-[800px] mx-0 px-0">
            <form method="dialog">
              <button className=" font-bold text-3xl hover:text-[#404040] text-secondary bg-none border-none absolute right-8 top-6">
                ✕
              </button>
            </form>
            <div className="flex flex-col items-center pt-[3rem] ">
              <div className="flex flex-col lg:flex-row justify-between gap-10 w-full px-10">
                <div className="w-full">
                  <Image
                    src={data.image}
                    alt=""
                    width={400}
                    height={400}
                    className=" bg-cover bg-no-repeat"
                  ></Image>
                </div>
                <div className="w-full text-black">
                  <h1 className=" text-4xl font-bold mb-5 ">{data.name}</h1>
                  <div className="flex flex-col gap-3 text-sm text-secondary font-thin font-serif py-5">
                    <h2>Price: ${data.price}</h2>
                    <h2>Quantity: {Quantity}</h2>
                    <h2>color: Black</h2>
                    <h2>Size: M</h2>
                  </div>

                  <div className=" w-full h-[1px] opacity-30 bg-secondary my-2"></div>
                  <h1 className="py-4 text-sm text-secondary font-bold font-serif">
                    Total: ${data.price * Quantity}
                  </h1>
                </div>
              </div>
              <div className=" w-full h-[1px] opacity-30 bg-secondary mb-5 mt-10"></div>
              <div className="flex flex-col w-full justify-center items-end px-10 h-auto py-5">
                <button className="max-w-72 p-5 bg-black text-white h-auto w-full hover:bg-primary text-center" onClick={handelADD}>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop ">
            <button className=" cursor-default">close</button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default Product_model;
