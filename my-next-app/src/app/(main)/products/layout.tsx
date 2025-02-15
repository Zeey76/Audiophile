import Gear from "@/components/gear";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Gear/>
    </>
  );
}