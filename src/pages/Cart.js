import React from "react";
import CartItem from "../components/CartItem";
import checkLogin from "../config/checkLogin";
import "../styles/cart.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  checkLogin()
  const data = JSON.parse(localStorage.getItem("items"));
  const user = JSON.parse(localStorage.getItem("user"));
  let total = 0
  data.forEach(item => {
    total = total + (item.quantity * item.price)
  })

  const tax = total * 0.18

  return (
    <div>
      <ToastContainer/>
      <div class="wrap cf bg-white mt-20 p-5 rounded-xl">
        <h1 class="projTitle">YOUR CART</h1>
        <div class="heading cf">
          <h1>{user.displayName}</h1>
          <a href="/menu" class="continue">
            Continue Shopping
          </a>
        </div>
        <div class="cart">
          <ul class="cartWrap">{data.map((item) => {
            return (
              <CartItem
                id={item.id}
                title={item.title}
                price={item.price}
                inStock={item.inStock}
                quantity={item.quantity}
                key={item.id}
                image={item.image}
              />
            );
          })}</ul>
        </div>

        <div class="promoCode">
          <label for="promo">Have A Promo Code?</label>
          <input type="text" name="promo" placholder="Enter Code" />
          <a href="#" class="btn"></a>
        </div>

        <div class="subtotal cf">
          <ul>
            <li class="totalRow">
              <span class="label">Subtotal</span>
              <span class="value">${total}.00</span>
            </li>

            <li class="totalRow">
              <span class="label">Shipping</span>
              <span class="value">$5.00</span>
            </li>

            <li class="totalRow">
              <span class="label">Tax</span>
              <span class="value">${tax}.00</span>
            </li>
            <li class="totalRow final">
              <span class="label">Total</span>
              <span class="value">${total + tax + 5}</span>
            </li>
            <li class="totalRow">
              <a href="#" class="btn continue">
                Checkout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
