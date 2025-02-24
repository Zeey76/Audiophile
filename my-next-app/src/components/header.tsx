"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SignOut from "./SignOut";
import Navbar from "./navbar";
import Cart from "./Cart";
const Header = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const toggleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  const closeNavBar = () => {
    setShowNavBar(false);
  };

  useEffect(() => {
    if (showNavBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNavBar]);

  return (
    <>
      {/* Header Section */}
      <div className="bg-black header-section p-10 w-full">
        <div className="relative w-full">
          <div className="header flex justify-between items-center text-white w-full">
            {/* Mobile Menu Button */}
            <button className="sm:hidden" onClick={toggleNavBar}>
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
                <p className="uppercase text-xs">Speakers</p>
              </Link>
              <Link href="/products/category/earphones">
                <p className="uppercase text-xs">Earphones</p>
              </Link>
            </div>

            {/* Cart and Sign Out */}
            <div className="flex items-center gap-4">
              <button onClick={toggleCart}>
                <Image
                  src="/assets/shared/desktop/icon-cart.svg"
                  alt="Cart"
                  width={20}
                  height={20}
                />
              </button>

              <SignOut />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar (Visible only when toggled) */}
      {showNavBar && <Navbar closeNavBar={closeNavBar} />}
      {showCart && <Cart/>}
    </>
  );
};

export default Header;
