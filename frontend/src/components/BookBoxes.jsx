import React from "react";
import { FaStar } from "react-icons/fa";

const items = [
  {
    id: 1,
    img: "https://ebook-public-data.s3.amazonaws.com/669e469bf094674648c4cac8-murder-on-the-orient-express.png",
    title: "The Road",
    price: 14,
  },
  {
    id: 2,
    img: "https://ebook-public-data.s3.amazonaws.com/669e469bf094674648c4cac8-murder-on-the-orient-express.png",
    title: "The Road",
    price: 14,
  },
  {
    id: 3,
    img: "https://ebook-public-data.s3.amazonaws.com/669e469bf094674648c4cac8-murder-on-the-orient-express.png",
    title: "The Road",
    price: 14,
  },
  {
    id: 4,
    img: "https://ebook-public-data.s3.amazonaws.com/669e469bf094674648c4cac8-murder-on-the-orient-express.png",
    title: "The Road",
    price: 14,
  },
  {
    id: 5,
    img: "https://ebook-public-data.s3.amazonaws.com/669e469bf094674648c4cac8-murder-on-the-orient-express.png",
    title: "The Road",
    price: 14,
  },
];

const BookBoxes = () => {
  return (
    <div className="mt-10">
      <header className="border-b border-b-black w-full mb-5">
        <h3 className="bg-black text-white font-semibold w-fit text-[.9rem] px-1 py-2 rounded-t-md">
          Fiction
        </h3>
      </header>
      <ul className="flex items-center justify-between w-full gap-5">
        {items.map((item) => {
          return (
            <li key={item.id} className="flex flex-col items-center w-full cursor-pointer">
              <div className="mb-2">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[7rem]"
                  loading="lazy"
                />
              </div>
              <div className="text-start w-full">
                <h3 className="text-[1rem] font-bold tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="w-fit text-[.7rem] text-white bg-primaryPink px-1 py-[.2rem] rounded-md mb-2">
                  24% Off
                </p>
                <div className="flex items-center gap-1 mb-2">
                  <p className="font-bold text-black text-[.9rem]">
                    {item.price}$
                  </p>
                  <p className="text-[.9rem] text-black line-through">18.00$</p>
                </div>
                <div className="w-fit text-[.8rem] text-black bg-darkYellow px-1 py-[.2rem] rounded-md flex items-center gap-1">
                  <p>4.5</p>
                  <FaStar className="mb-[2px]" />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookBoxes;
