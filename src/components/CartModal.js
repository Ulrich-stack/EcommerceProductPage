import React from "react";

const CartModal = ({ CartContent, show, deleteProduct}) => {
  return (
    <div
      className={`w-80 border absolute right-1/2 transform translate-x-1/2 z-10 bg-white shadow-lg flex flex-col ${
        !show ? "hidden" : ""
      }`}
    >
      <div className="p-3 border-b font-bold text-xs text-black">Cart</div>
      <div className="p-4 flex justify-center items-center">
        {CartContent === 0 ? (
          <span className="font-bold text-xs text-black">
            Your cart is empty
          </span>
        ) : (
          <div className="size-full">
            <div className=" flex size-full items-center">
              <div className="w-2/12">
                <img
                  className="rounded-lg size-[50px]"
                  src="../../images/image-product-1-thumbnail.jpg"
                  alt="product-thumbnail"
                ></img>
              </div>
              <div className="w-9/12 ml-4 flex flex-col justify-between">
                <span className="text-sm">Fall Limited Edition Sneakers</span>
                <span>
                  $125.00 x {CartContent}{" "}
                  <strong>{"$" + CartContent * 125}</strong>
                </span>
              </div>
              <div className="w-1/12 flex justify-end">
                <button onClick={e=>deleteProduct(e)}>
                  <img src="../../images/icon-delete.svg"></img>
                </button>
              </div>
            </div>
            <div>
              <button className="w-full mt-2 bg-[#FF6E00] p-2 rounded-lg text-white font-bold">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
