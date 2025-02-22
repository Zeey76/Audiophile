"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
import SignOut from "./SignOut";

const Header = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    if (showNavBar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showNavBar]);

  return (
    <>
      {/* Header Section */}
      <div className="bg-black p-10 w-full">
        <div className="relative">
          <div className="header flex justify-between items-center text-white w-full">
            {/* Mobile Menu Button */}
            <button className="sm:hidden" onClick={() => setShowNavBar(!showNavBar)}>
              <Image
                src="/assets/shared/tablet/icon-hamburger.svg"
                alt="Menu"
                width={20}
                height={20}
              />
            </button>

            {/* Logo */}
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="Logo"
              width={100}
              height={50}
              className="w-[100px] h-auto"
            />

            {/* Desktop Nav */}
            <div className="hidden sm:flex sm:gap-4">
              <p className="uppercase text-xs">Home</p>
              <p className="uppercase text-xs">Headphones</p>
              <p className="uppercase text-xs">Speakers</p>
              <p className="uppercase text-xs">Earphones</p>
            </div>

            {/* Cart and Sign Out */}
            <div className="flex items-center gap-4">
              <Image
                src="/assets/shared/desktop/icon-cart.svg"
                alt="Cart"
                width={20}
                height={20}
              />
              <SignOut />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar (Visible only when toggled) */}
      {showNavBar && <Navbar />}
    </>
  );
};

export default Header;
