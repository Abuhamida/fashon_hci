"use client";
import React, { useState, useEffect, use } from "react";
import { Cdata } from "./data";
import Image from "next/image";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { Copouns } from "./data";
import {  toast } from "react-toastify";

export default function Page() {
  const [quantities, setQuantities] = useState({});
  const [cartTotal, setCartTotal] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [discountValue, setDiscountValue] = useState(Number);
  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [cartId,setCartId] = useState(Number)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cart = await fetch("/api/products/getUserCart");
        if (cart.ok) {
          const data = await cart.json();
          setAllProducts(data.data.products);
          setCartId(data.data.id)
        }
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const defaultQuantities = {};
      const productData = {};
  
      await Promise.all(allProducts.map(async (item) => {
        const productId = item.productId;
        defaultQuantities[productId] = item.quantity;
        const response = await fetch("/api/products/getsingleproduct", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: productId,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          productData[productId] = data;
        }
      }));
  
      setProduct(productData);
      setQuantities(defaultQuantities);
    };
  
    fetchData();
  }, [allProducts]);
  
  useEffect(() => {
    // Calculate cart total whenever quantities or prices change
    let total = 0;
    allProducts.forEach((item) => {
      const quantity = quantities[item.productId] || 0;
      total += product[item.productId]?.price * quantity - discountValue;
    });
    setCartTotal(total);
  }, [quantities, discountValue]);

  const applyCoupon = () => {
    const discount = Copouns.find((item) => item.name === coupon);
    if (discount) {
      setDiscountValue(discount.discount);
    } else {
      setDiscountValue(0);
    }
  };

  const updateQuantity = (id, value) => {
    const newQuantity = Math.max(0, value);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
  };

 

  const calculateTotalPrice = (price, quantity) => {
    return price * quantity;
  };

  const handelDelete = ()=>{
    toast.success("Product Deleted Successfully ", {
          });
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center  w-full gap-5 min-h-screen py-20 px-10 bg-[#f0f8ff]">
      <div className="flex flex-col w-3/4 h-screen  gap-10">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold">Shopping Cart</h1>
          <h4>
            <span className=" font-bold">{allProducts.length} items </span> in your cart
          </h4>
        </div>
        <div className=" bg-white rounded-2xl w-full flex flex-col items-center justify-center">
          <div className="flex w-full h-full justify-between px-10 py-5 text-xl font-bold">
            <div>
              <h1>Product</h1>
            </div>
            <div className="flex justify-center gap-20 ">
              <h1>Price</h1>
              <h1>Quantity</h1>
              <h1> Total Price</h1>
            </div>
          </div>
          <div className="flex flex-col gap-10 pb-10 w-full px-10">
            {allProducts.map((item, index) => (
              <div
                key={item[index+1]}
                className="flex w-full items-start justify-between relative "
              >
                <div className=" absolute top-0 right-0 w-6 text-center h-6 rounded-full bg-primary text-white cursor-pointer" onClick={handelDelete}> <h1>X</h1> </div>
                <div className="flex gap-5">
                  <div>
                    <Image
                      src={product[item.productId]?.image}
                      width={800}
                      height={800}
                      alt=""
                      className="w-40 h-44 rounded-lg"
                    ></Image>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-center">
                    <div className="flex flex-col gap-2">
                      <h2 className=" text-lg text-gray-500">
                        {product[item.productId]?.category}
                        <span className="text-xl font-bold text-black">
                          <br />
                          {product[item.productId]?.title}
                        </span>
                      </h2>
                    </div>
                    <div className="flex flex-col items-center">
                      <h1 className=" text-lg text-gray-500">
                        
                        color
                        <span className="text-xl font-bold text-black pl-2">
                          {/* {item.color} */} Black
                        </span> 
                      </h1>
                    </div>
                    <div>
                      <h1 className=" text-lg text-gray-500">
                        size
                        <span className="text-xl font-bold text-black pl-2">
                          {/* {item.size} */} M
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-28 text-xl font-bold h-full ">
                  <div className="w-full flex justify-center items-center">
                    
                    ${Math.round(product[item.productId]?.price)}
                  </div>
                  <div className="w-full flex justify-center items-center gap-4">
                    <button
                      className=" text-gray-500 text-3xl"
                      onClick={() =>
                        updateQuantity(item.productId, (quantities[item.productId] || 0) - 1)
                      }
                    >
                      <CiSquareMinus />
                    </button>
                    <h1>{quantities[item.productId] || 0}</h1>
                    <button
                      className=" text-gray-500 text-3xl"
                      onClick={() =>
                        updateQuantity(item.productId, (quantities[item.productId] || 0) + 1)
                      }
                    >
                      <CiSquarePlus />
                    </button>
                  </div>
                  <div className="w-full flex justify-center items-center text-primary">
                    ${calculateTotalPrice(product[item.productId]?.price, quantities[item.productId] || 0)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/4 bg-white rounded-xl min-h-screen gap-10 py-8 px-2">
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Calculated Shipping</h1>
          <div>
            <select className="select select-bordered w-full max-w-xs rounded-full">
              <option disabled selected>
                country
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="flex gap-3">
            <div className="w-full">
              <select className="select select-bordered w-full max-w-xs rounded-full">
                <option disabled selected>
                  State/City
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="ZIP Code"
                className="input input-bordered w-full max-w-xs rounded-full"
              />
            </div>
          </div>
          <button className="btn btn-active rounded-full bg-black text-white">
            Update
          </button>
        </div>
        <div className="w-full h-1 bg-gray-500"></div>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold ">Coupon Code</h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            laborum quos at a velit eius officia, facere quia, culpa doloremque
            placeat eos cumque quaerat repellat voluptatibus veritatis
            voluptatum ratione similique!
          </p>
          <input
            type="text"
            placeholder="Coupon Code"
            value={coupon}
            onChange={(e) => {
              setCoupon(e.target.value);
            }}
            className="input input-bordered w-full max-w-xs rounded-full"
          />
          <button
            className="btn btn-active rounded-full bg-black text-white"
            onClick={applyCoupon}
          >
            APPLY
          </button>
        </div>
        <div className=" bg-primary/90 w-full flex flex-col gap-3 py-5 px-2 rounded-xl text-white">
          <div>
            <h1 className="text-xl font-bold text-white">Cart Total</h1>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <h1>Cart Subtotal</h1>
              <h1>${Math.ceil(cartTotal)}</h1>
            </div>
            <div className="flex justify-between items-center">
              <h1>Design by Fluttertop</h1>
              <h1>Free</h1>
            </div>
            <div className="flex justify-between items-center">
              <h1>Discount</h1>
              <h1>-${Math.round(discountValue * cartTotal)}</h1>
            </div>
            <div className="flex justify-between items-center font-bold">
              <h1>Cart Total</h1>
              <h1>${Math.round(cartTotal - discountValue * cartTotal)}</h1>
            </div>
          </div>
          <button className="btn btn-active rounded-full bg-white text-black">
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
}
