import React from "react";

const ProductInfo = ({numberOfItems, remove, add, addToCart}) => {
  return (
    <div className="p-14 w-1/2 h-full">
      <h3 className="font-bold text-[#FF6E00]">SNEAKER COMPANY</h3>
      <h1 className="font-bold text-4xl text-black mt-4">
        Fall Limited Edition Sneakers
      </h1>
      <p className="mt-8">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer stole, they'ill withstand everything
        the weather can offer.
      </p>
      <div className="flex items-center mt-8 gap-4">
        <span className="font-bold text-2xl text-black">$125.00</span>
        <div className="px-3 rounded-md bg-[#FFEDE0] text-[#FF6E00] font-bold">
          50%
        </div>
      </div>
      <p className="mt-2 line-through">$250.00</p>
      <div className="flex gap-3 pt-8 justify-between">
        <div className="w-3/6 border py-2 rounded-md px-3 flex justify-between items-center bg-[#e9e5e0]">
          <button onClick={remove}>
            <img src="../../images/icon-minus.svg"></img>
          </button>
          <span className="text-black font-bold">{numberOfItems}</span>
          <button onClick={add}>
            <img src="../../images/icon-plus.svg"></img>
          </button>
        </div>
        <button className="p-3 flex w-full bg-[#FF6E00] hover:opacity-70 text-white justify-center items-center gap-3 rounded-md" onClick={e => addToCart(e)}>
            <img className="text-white" src="../../images/icon-cart.svg"></img>
            <span className="font-bold">Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
