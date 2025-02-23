import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
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
          <div className="relative w-full h-full">
            {/* Desktop Image */}
            <div className="hidden sm:block">
              <Image
                src="/assets/home/desktop/image-hero.jpg"
                alt="Hero"
                fill
                className="object-cover object-bottom"
                priority
              />
            </div>

            {/* Tablet Image */}
            <div className="hidden sm:block md:hidden">
              <Image
                src="/assets/home/tablet/image-header.jpg"
                alt="Hero"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Mobile Image */}
            <div className="block sm:hidden">
              <Image
                src="/assets/home/mobile/image-header.jpg"
                alt="Hero"
                fill
                className="object-cover object-bottom"
                priority
              />
            </div>
          </div>

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
        <div className="w-full px-8 md:w-[80%] mx-auto pt-[8rem]">
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
                <Link href={`/products/category/${item}`}>
                  <p className="uppercase text-[hsl(0,0%,25%)]">Shop</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-[1.5rem] mb-[5rem]">
            <div className="bg-[#d87d4a] w-full h-[600px] sm:h-[450px] md:h-[380px] rounded-sm">
              <div className="sm:w-full md:w-[80%] h-full mx-auto flex flex-col md:flex-row gap-6 justify-center md:justify-between items-center">
                <Image
                  src={`/assets/home/desktop/image-speaker-zx9.png`}
                  alt=""
                  width={270}
                  height={270}
                  className="hidden md:block self-end"
                />
                <Image
                  src={`/assets/home/tablet/image-speaker-zx9.png`}
                  alt=""
                  width={100}
                  height={100}
                  className="hidden sm:block md:hidden"
                />
                <Image
                  src={`/assets/home/mobile/image-speaker-zx9.png`}
                  alt=""
                  width={200}
                  height={200}
                  className="block sm:hidden"
                />
                <div className="text-white w-[330px] flex flex-col gap-[2rem] items-center text-center md:text-left md:items-start">
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
              <div className=" relative w-full h-full">
                <Image
                  src="/assets/home/desktop/image-speaker-zx7.jpg"
                  alt="Speaker ZX7"
                  fill
                  className="object-cover object-bottom hidden md:block"
                />
                <Image
                  src="/assets/home/tablet/image-speaker-zx7.jpg"
                  alt="Speaker ZX7"
                  fill
                  className="object-cover object-bottom hidden sm:block md:hidden"
                />
                <Image
                  src="/assets/home/mobile/image-speaker-zx7.jpg"
                  alt="Speaker ZX7"
                  fill
                  className="object-cover object-bottom block sm:hidden"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 text-black">
                <div className="w-[80%] mx-auto flex flex-col  gap-6">
                  <h2 className="text-3xl uppercase">ZX7 speaker</h2>
                  <button className="uppercase p-[10px] bg-transparent border border-black w-[180px] rounded-sm">
                    See product
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-[1rem] w-full">
              {/* Image Section */}
              <div className="w-full sm:w-1/2 h-[250px] sm:h-[300px]">
                {/* Desktop Image */}
                <Image
                  src="/assets/home/desktop/image-earphones-yx1.jpg"
                  alt="YX1 Earphones"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover rounded-md hidden md:block"
                />
                {/* Tablet Image */}
                <Image
                  src="/assets/home/tablet/image-earphones-yx1.jpg"
                  alt="YX1 Earphones"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover rounded-md hidden sm:block md:hidden"
                />
                {/* Mobile Image */}
                <Image
                  src="/assets/home/mobile/image-earphones-yx1.jpg"
                  alt="YX1 Earphones"
                  width={200}
                  height={200}
                  className="h-full w-full object-cover rounded-md block sm:hidden"
                />
              </div>

              {/* Text Section */}
              <div className="bg-[#f1f1f1] flex flex-col justify-center gap-6 p-[2rem] md:p-[4rem] w-full sm:w-1/2 h-[250px] sm:h-[300px] rounded-md">
                <h2 className="sm:text-2xl md:text-3xl uppercase">
                  Yx1 Earphones
                </h2>
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
