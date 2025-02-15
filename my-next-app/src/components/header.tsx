"use client"
import Image from "next/image";
import { useState } from "react";
import Navbar from "./navbar";
import SignOut from "./SignOut";
const Header = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  return (
    <>
    <div className="bg-black p-4 w-full">
      <div className="header relative flex justify-between py-8 text-white w-full">
        <button className="sm:hidden" onClick={() => setShowNavBar(!showNavBar)}>
          <Image
            src="/assets/shared/tablet/icon-hamburger.svg"
            alt="Logo"
            width={20}
            height={20}
            
          />
        </button>
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="Logo"
          width={100}
          height={50}
          style={{ width: "100px", height: "auto" }}
        />
        <div className="hidden sm:gap-4 sm:flex">
          <p className="uppercase text-xs">Home</p>
          <p className="uppercase text-xs">Headphones</p>
          <p className="uppercase text-xs">Speakers</p>
          <p className="uppercase text-xs">Earphones</p>
        </div>
        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          alt="Cart"
          width={20}
          height={20}
        />
        <div className="absolute top-[0.1rem] right-0">
        <SignOut/>

        </div>
      </div>
    </div>
    {showNavBar && <Navbar />}
    </>
  );
};

export default Header;
