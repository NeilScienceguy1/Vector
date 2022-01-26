import React, { useEffect, useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import MenuCard from "../components/MenuCard";
import getProducts from "../config/getProducts";
import "../styles/menu.css";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import checkLogin from "../config/checkLogin";
const Menu = () => {
  checkLogin()
  const [productArrays, setProductArrays] = useState([]);
  useEffect(() => {
    getProducts().then((result) => {
      setProductArrays(result);
    });
  }, []);
  return (
    <div className="">
      <ToastContainer/>
        <HomeNavbar />
        <div className="text-center flex justify-center items-center pt-32 whitespace-pre">
          <h1 className="text-white text-6xl">MENU</h1>
          <br></br>
        </div>
        {productArrays.map((products) => {
          return (
            <section className="h-screen flex items-center justify-center menu-section gap-10">
              {products.map((product) => {
                const percentage = parseInt(
                  ((product.originalPrice - product.discountedPrice) /
                    product.originalPrice) *
                    100
                );
                return (
                  <MenuCard
                    image={product.picture}
                    tags={product.tags}
                    title={product.name}
                    originalPrice={product.originalPrice}
                    discountPrice={product.discountedPrice}
                    discountPercentage={percentage}
                    reviews={product.reviews}
                    rating={product.rating}
                    id={product.id}
                  />
                );
              })}
            </section>
          );
        })}
    </div>
  );
};

export default Menu;
