import React from "react";
import Image from "next/image";

const Gear = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-[3rem] md:h-[500px] justify-center items-center w-full px-[2rem] md:w-[80%] mx-auto mb-[7rem]">
      <div className="w-full text-center md:text-left md:w-[50%] flex flex-col justify-center gap-6 rounded-sm">
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
        width={500} 
        height={600} 
        className="w-[50%] h-full hidden md:block object-cover rounded-md"
      />
      <Image
        src="/assets/shared/tablet/image-best-gear.jpg"
        alt="Best Gear"
        width={600} // Adjust width as needed
        height={600} // Adjust height as needed
        className="w-full h-full object-cover rounded-md hidden sm:block md:hidden"
      />
      <Image
        src="/assets/shared/tablet/image-best-gear.jpg"
        alt="Best Gear"
        width={600} // Adjust width as needed
        height={600} // Adjust height as needed
        className="w-full h-full object-cover rounded-md block sm:hidden"
      />
    </div>
  );
};

export default Gear;
