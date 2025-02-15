import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
const Page = async () => {
  const { userId } = await auth();
  const navItems = ["headphones", "speakers", "earphones"];
  if (!userId) {
    redirect("/"); // Send unauthorized users to the homepage
  }

  return (
    <>
      <div>
        <div className="relative h-[560px] w-full">
          <img
            src="/assets/home/desktop/image-hero.jpg"
            className="w-full h-full object-cover object-bottom hidden md:block"
            alt="Hero"
          />
          <img
            src="/assets/home/tablet/image-header.jpg"
            className="w-full h-full object-cover object-bottom hidden sm:block md:hidden"
            alt="Hero"
          />
          <img
            src="/assets/home/mobile/image-header.jpg"
            className="w-full h-full object-cover object-bottom block sm:hidden"
            alt="Hero"
          />
          <div className="absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 text-white">
            <div className="w-[80%] mx-auto text-center md:text-left flex flex-col items-center md:items-start gap-6">
              <p className="text-sm uppercase tracking-widest">New Product</p>
              <h2 className="text-4xl font-bold uppercase w-[300px]">
                XX99 Mark II Headphones
              </h2>
              <p className="text-lg w-[400px] text-[#f1f1f1]">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <button className="uppercase p-[10px] bg-[#d87d4a] w-[180px] rounded-sm">
                See product
              </button>
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-auto pt-[8rem]">
          <ul className="flex flex-col  sm:flex-row gap-4 items-center mb-[3rem]">
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
          <div className="flex flex-col gap-[1.5rem] mb-[5rem]">
            <div className="bg-[#d87d4a] w-full h-[380px] rounded-sm">
              <div className="w-[80%] h-full mx-auto flex justify-between items-center">
                <Image
                  src={`/assets/home/desktop/image-speaker-zx9.png`}
                  alt=""
                  width={270}
                  height={270}
                  className="self-end"
                />
                <div className="text-white w-[330px] flex flex-col gap-[2rem]">
                  <h2 className="uppercase text-5xl">ZX9 speaker</h2>
                  <p>
                    Upgrade to premium speakers that are phenomically built to
                    deliver truly remarkable sound
                  </p>
                  <button className="uppercase p-[10px] bg-black w-[180px] rounded-sm">
                    See product
                  </button>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] w-full">
          <img
            src="/assets/home/desktop/image-speaker-zx7.jpg"
            className="w-full h-full object-cover object-bottom hidden md:block"
            alt=""
          />
          {/* <img
            src="/assets/home/tablet/image-header.jpg"
            className="w-full h-full object-cover object-bottom hidden sm:block md:hidden"
            alt="Hero"
          />
          <img
            src="/assets/home/mobile/image-header.jpg"
            className="w-full h-full object-cover object-bottom block sm:hidden"
            alt="Hero"
          /> */}
          <div className="absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 text-black">
            <div className="w-[80%] mx-auto flex flex-col  gap-6">
              <h2 className="text-3xl uppercase">ZX7 speaker</h2>
              <button className="uppercase p-[10px] bg-transparent border border-black w-[180px] rounded-sm">
                See product
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-[1rem] h-[300px]">
            <img src="/assets/home/desktop/image-earphones-yx1.jpg" alt="" className=" h-full object-cover rounded-sm"/>
            <div className="bg-[#f1f1f1] flex flex-col  p-[4rem] justify-center gap-6 w-full rounded-sm">
              <h2 className="text-3xl uppercase">Yx1 earphones</h2>
              <button className="uppercase p-[10px] bg-transparent border border-black w-[180px] rounded-sm">
                See product
              </button>
            </div>
        </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Page;
