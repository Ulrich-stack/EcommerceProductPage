import React from "react";

const Cards = ({ productIndex, onClick }) => {
  const images = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
  ];

  const getThumbnail = (imageName) =>
    imageName.replace(".jpg", "-thumbnail.jpg");

  return (
    <div className="w-1/2 flex flex-col items-center">
      <div>
        <img
          src={`../../images/${images[productIndex]}`}
          className=" size-[400px] rounded-xl"
        ></img>
      </div>
      <div className="flex gap-10 pt-4">
        {images.map((item, index) => {
          return (
            <div
              className={` rounded-xl ${
                productIndex === index
                  ? "border-2 border-[#FF6E00]"
                  : " hover:cursor-pointer hover:opacity-50"
              } flex justify-center items-center`}
              onClick={(e) => onClick(e, index)}
            >
              <img
                src={`../../images/${getThumbnail(item)}`}
                className={`size-[70px] rounded-xl ${
                  productIndex === index ? "opacity-30" : ""
                }`}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
