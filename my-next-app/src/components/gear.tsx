import React from "react";
import Image from "next/image";

const Gear = () => {
  return (
    <div className="flex gap-[3rem] h-[500px] justify-center items-center w-[80%] mx-auto mb-[7rem]">
      <div className=" w-[50%] flex flex-col justify-center gap-6 rounded-sm">
        <h2 className="text-4xl uppercase">Bringing you the best audio gear</h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <Image
        src="/assets/shared/desktop/image-best-gear.jpg"
        alt="Best Gear"
        width={500} // Adjust width as needed
        height={600} // Adjust height as needed
        className="w-[50%] h-full object-cover rounded-sm"
      />
    </div>
  );
};

export default Gear;
