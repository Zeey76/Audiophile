import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-black p-4 w-full">
      <div className="footer relative  flex flex-col gap-8 justify-between py-8 text-white w-full">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center sm:items-start">
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="Logo"
            width={100}
            height={50}
            style={{ width: "100px", height: "auto" }}
          />
          <div className="flex flex-col sm:flex-row items-center  gap-4">
            <Link href="">HOME</Link>
            <Link href="">HEADPHONES</Link>
            <Link href="">SPEAKERS</Link>
            <Link href="">EARPHONES</Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 justify-between items-center">
          <div className="flex flex-col gap-8 sm:gap-16 ">
            <p className=" sm:w-full lg:max-w-[550px] text-gray-400">
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we&apos;re open 7 days a week.
            </p>
            <p className="text-gray-400">Copyright 2021. All Rights Reserved</p>
          </div>
          <div className="flex gap-2 sm:self-end">
            <Link href=""><Image src="/assets/shared/desktop/icon-facebook.svg" alt="" width={30}
            height={30} /></Link>
            <Link href=""><Image src="/assets/shared/desktop/icon-instagram.svg" alt="" width={30}
            height={30}/></Link>
            <Link href=""><Image src="/assets/shared/desktop/icon-twitter.svg" alt="" width={30}
            height={30}/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
