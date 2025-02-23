"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
import SignOut from "./SignOut";
import Link from "next/link";

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
            <button
              className="sm:hidden"
              onClick={() => setShowNavBar(!showNavBar)}
            >
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
              <Link href="/products/category/headphones">
                <p className="uppercase text-xs">Headphones</p>
              </Link>
              <Link href="/products/category/speakers">
                <p className="uppercase text-xs">Headphones</p>
              </Link>
              <Link href="/products/category/earphones">
                <p className="uppercase text-xs">Headphones</p>
              </Link>
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
