import Image from "next/image";
import Link from "next/link";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = ["headphones", "speakers", "earphones"];
  return (
    <>
      {children}
      <ul className="flex flex-col w-full sm:flex-row gap-4 items-center md:w-[85%] p-10 md:p-0 mx-auto mb-[3rem] mt-[6rem]">
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
    </>
  );
}
