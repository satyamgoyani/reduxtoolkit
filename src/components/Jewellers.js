import React from "react";
import Store from "../images/1.jpg";
import Store1 from "../images/JDGN3678-1.jpg";
import Store2 from "../images/JDGN3678-2.jpg";
import Store3 from "../images/JDGN3678-3.jpg";
import Video from "../images/video/video.mp4";

const Jewellers = () => {
  return (
    <div className=" h-full w-full md:px-10 px-4">
      {/* Breadcrumb */}
      <div className="text-sm py-4">
        <span className="text-gray-500 hover:text-gray-700">
          Home / Floral Diamond Emerald Pearl Long Haar
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-10 lg:mx-[4.0406rem] mx-auto">
        <div>
          <div className="flex flex-col-reverse md:flex-row gap-4 w-full">
            {/* Thumbnails */}
            <div className="w-full md:w-[6.25rem] flex md:block gap-2  justify-center">
              <div className="w-[4.5rem] h-[4.5rem] cursor-pointer">
                <img
                  src={Store}
                  alt="Thumbnail"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div className="w-[4.5rem] h-[4.5rem] cursor-pointer">
                <img
                  src={Store1}
                  alt="Thumbnail"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div className="w-[4.5rem] h-[4.5rem] cursor-pointer">
                <img
                  src={Store2}
                  alt="Thumbnail"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div className="w-[4.5rem] h-[4.5rem] cursor-pointer">
                <img
                  src={Store3}
                  alt="Thumbnail"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div className="w-[4.5rem] h-[4.5rem] cursor-pointer">
                <video
                  src={Video}
                  className="w-full h-full object-contain p-0.5"
                  controls
                  onClick={(e) => e.target.play()}
                />
              </div>
            </div>

            {/* Main Image */}
            <div className="flex-1">
              <img
                src={Store}
                alt="Main Product"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right side - Product details */}
        <div className="mx-auto max-w-lg">
          <div className="text-sm tracking-wide text-[#282828] font-semibold">
            KRISHNA JEWELLERS
          </div>

          <h1 className="text-[36px] font-serif my-[1.5rem] text-gray-800">
            Floral Diamond Emerald Pearl Long Haar
          </h1>

          {/* Reviews */}
          <div className="flex items-center w-full">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className="text-[#FF0000] text-lg font-semibold"
                >
                  ☆
                </span>
              ))}
            </div>
            <span className="text-blue-600 text-sm hover:underline cursor-pointer ml-1">
              No reviews
            </span>
          </div>

          {/* Price */}
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-2xl text-[#cda464]">₹ 2,140,221.00</span>
              <span className="bg-[#907fbd] text-white font-semibold px-1.5 py-0.5 text-[15px]">
                SOLD OUT
              </span>
            </div>
            <div className="text-sm text-gray-600 mt-3 pb-4">
              SKU: J DGN 3678
            </div>
            <hr className="mb-5"></hr>
          </div>

          {/* Description */}
          <div className="text-gray-700 text-lg">
            <p>
              Our Premium Diamond, Pearl and Emerald mix is an over the ear
              style that is perfect for any occasion. The hairdo is made with
              our premium grade di...

            </p>
            <button className="text-black font-medium  ml-1">
              Read More
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 pt-2">
            <button className="bg-[#7D6E67] hover:bg-[#5A4A84] text-white text-sm px-4 py-3 w-full font-semibold">
              PRODUCT ENQUIRY
            </button>
            <button className="bg-[#7D6E67] hover:bg-[#5A4A84] text-white text-sm px-4 py-3 w-full font-semibold">
              TALK TO OUR EXPERT
            </button>
          </div>

          {/* Wishlist */}
          <button className="flex justify-center items-center gap-2 text-gray-700 hover:text-gray-900 pt-2 w-full">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jewellers;
