import React, { useContext } from "react";

//import Link
import { Link } from "react-router-dom";

//import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

//import Cart Context
import { CartContext } from "../contexts/CartContext";

const CartItemComponent = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  //destructure item
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* images */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="title" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title & remove icon */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* remove icons */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* Quantity */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              {/* Minus icons */}
              <div
                onClick={() => {
                  decreaseAmount(id);
                }}
                className="flex-1 flex  justify-center items-center cursor-pointer h-full"
              >
                <IoMdRemove />
              </div>
              {/* Amount */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              {/* Plus Icon */}
              <div
                onClick={() => {
                  increaseAmount(id);
                }}
                className="flex-1 h-full flex  justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* Item Price */}
            <div className="flex-1 flex items-center justify-around">
              $ {price}
            </div>
            {/* Final Price */}
            {/* make the price at 2 decimals */}
            <div className=" flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItemComponent;
