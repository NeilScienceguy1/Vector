import React from 'react';
import removeItem from '../config/removeItemFromCart';
import { toast } from "react-toastify";

const CartItem = ({ id, title, price, quantity, inStock, image }) => {
  return (
    <div className="">
      <li class="items even">
        <div class="infoWrap">
          <div class="cartSection">
            <img
              src={image}
              alt=""
              class="itemImg"
            />
            <p class="itemNumber">{id}</p>
            <h3>{title}</h3>

            <p>
              {" "}
              <input
                type="text"
                class="qty"
                placeholder={quantity}
                disabled
              />{" "}
              x ${price}.00
            </p>

            <p class="stockStatus">{inStock ? "In Stock" : "Out of Stock"}</p>
          </div>

          <div class="prodTotal cartSection">
            <p>${quantity * price}.00</p>
          </div>
          <div class="cartSection removeWrap">
            <a
              href="#"
              class="remove"
              onClick={() => {
                removeItem(id);
                toast.success(
                  "Item removed from cart! Please Reload to See Changes",
                  {
                    theme: "colored",
                  }
                );
              }}
            >
              x
            </a>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
