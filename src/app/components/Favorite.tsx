import React, { Component } from "react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function Favorite() {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  return (
    <div>
      <div
        className={`flex flex-col justify-center items-center absolute p-2 right-3 top-3 cursor-pointer z-10 hover:text-primary ${
          favorite ? "text-primary" : "text-white  active:text-white" 
        } `}
        onClick={handleFavorite}
      >
        <FaHeart />
      </div>
    </div>
  );
}
