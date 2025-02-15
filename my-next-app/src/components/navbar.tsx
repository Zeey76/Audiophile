import React from "react";
import Image from "next/image";

const Navbar = () => {
  const navItems = ["headphones", "speakers", "earphones"];
  return (
    <div className="sm:hidden absolute left-1/2 -translate-x-1/2 nav-bar w-full mx-auto  bg-white pt-[5rem] px-4">
      <ul className="flex flex-col gap-4 items-center">
        {navItems.map((item) => (
          <li
            className="relative w-full bg-[#f1f1f1] text-white p-4 rounded-md flex flex-col gap-4 items-center justify-center mb-[5rem]"
            key={item}
          >
            <Image
              src={`/assets/shared/desktop/image-category-thumbnail-${item}.png`}
              alt={item}
              width={150}
              height={150}
              className="absolute -top-12 z-20 mb-4"
            />
            <h3 className="mt-[5rem] uppercase text-black">{item}</h3>
            <p className="uppercase text-[hsl(0,0%,25%)]">Shop</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
