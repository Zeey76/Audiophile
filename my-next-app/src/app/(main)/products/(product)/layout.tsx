import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = ["headphones", "speakers", "earphones"];
  return (
    <>
      {children}
      <ul className="flex flex-col  sm:flex-row gap-4 items-center mb-[3rem] mt-[6rem]">
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
    </>
  );
}
