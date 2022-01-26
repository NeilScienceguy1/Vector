import React, { useState, useEffect } from "react";
import addProduct from "../config/addItemToCart";
import { toast } from "react-toastify";
import { AuthContext, useAuth } from "../contexts/auth.context";
import { unlikeProduct, likeProduct } from "../config/likeProduct";

const MenuCard = ({
  image,
  tags,
  title,
  originalPrice,
  discountPrice,
  discountPercentage,
  reviews,
  rating,
  id,
}) => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("liked")));
  const [liked, setLiked] = React.useState(data.includes(id));
  return (
    <div className="bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden">
      <img src={image} alt="burger" class="w-full h-60 object-cover" />
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center gap">
          {tags.map((tag) => {
            return (
              <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
                {tag}
              </span>
            );
          })}
        </div>
        <h2
          title="Bacon Cheeseburger"
          className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap"
        >
          {title}
        </h2>
        <div className="">
          <span className="text-xl font-bold">{discountPrice}.00$</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">
              {originalPrice}.00$
            </span>
            <span className="bg-green-400 px-1 5 py-0 5 rounded-md text-xs text-white">
              Save {discountPercentage}%
            </span>
          </div>
        </div>

        <span className="flex items-center mt-1">
          {rating} <img src="/assets/star.svg" alt="star" />
          <span class="text-xs ml-2 text-gray-500">{reviews} Reviews</span>
        </span>

        <div className="mt-5 flex gap-2">
          <button
            className="bg-yellow-500/80 hover:bg-yellow-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition"
            onClick={() => {
              addProduct(id);
              toast.success(`Added ${title} to cart!`, {
                theme: "colored",
              });
            }}
          >
            Add to Cart
          </button>
          {liked ? (
            <>
              <button
                className="flex-grow flex justify-center items-center hover:bg-red-600 transition rounded-md bg-red-700"
                onClick={() => {
                  unlikeProduct(id);
                  setLiked(false);
                  toast.error(`You unliked ${title}!`, {
                    theme:"colored"
                  });
                }}
              >
                <img
                  src="/assets/love.svg"
                  alt="heart"
                  className="opacity-50"
                />
              </button>
            </>
          ) : (
            <>
              <button
                className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md"
                onClick={() => {
                  likeProduct(id);
                  setLiked(true);
                  toast.warn(`You liked ${title}!`, {
                    theme:"colored"
                  });
                }}
              >
                <img
                  src="/assets/love.svg"
                  alt="heart"
                  className="opacity-50"
                />
              </button>
            </>
          )}
          <button
            className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md"
            onClick={() => {
              addProduct(id);
              toast.info(`Added one more ${title} to cart!`, {
                theme: "colored",
              });
            }}
          >
            <img src="/assets/plus.svg" alt="like" className="opacity-50" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
