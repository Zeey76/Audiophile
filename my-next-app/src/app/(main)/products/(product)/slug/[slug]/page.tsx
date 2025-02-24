import { getProductBySlug } from "../../../../../../../prisma/seed";
import Image from "next/image";
import Back from "@/components/Back";
import Link from "next/link";

// Generate static pages for specific categories
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = [
    "yx1-earphones",
    "xx59-headphones",
    "xx99-mark-one-headphones",
    "xx99-mark-two-headphones",
    "zx7-speaker",
    "zx9-speaker",
  ];
  return slugs.map((slug) => ({
    slug: slug.toString(),
  }));
}

const ProdductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="md:w-[85%] p-10 md:p-0 md:pt-10  mx-auto w-full">
        <Back />
        <div className="w-full mb-10 flex flex-col sm:flex-row items-center justify-between gap-6 mx-auto">
          <div className="w-full relative sm:w-[43%]  sm:h-[500px] h-[400px] ">
            <Image
              src={product.imageDesktop}
              alt={product.slug}
              fill
              className="hidden md:block rounded-md object-cover"
            />
            <Image
              src={product.imageTablet}
              alt={product.slug}
              fill
              className="hidden md:hidden sm:block rounded-md object-cover"
            />
            <Image
              src={product.imageMobile}
              alt={product.slug}
              fill
              className="block sm:hidden rounded-md object-cover"
            />
          </div>
          <div className="w-full sm:w-[57%] sm:max-w-[700px] sm:pl-8">
            {product.isNew && (
              <p className="uppercase text-[#d87d4a] mb-2">New product</p>
            )}
            <p className="text-3xl font-bold uppercase mb-6">{product.name}</p>
            <p className="mb-6">{product.description}</p>
            <p className="mb-6">$ {product.price}</p>
            <div className="flex gap-4">
              <button className="uppercase p-[10px] bg-[#f1f1f1] w-[140px] rounded-sm">
                1
              </button>
              <button className="uppercase p-[10px] bg-[#d87d4a] w-[180px] rounded-sm">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-12 md:flex-row mb-12">
          <div className="md:w-[65%]">
            <h3 className="uppercase text-xl mb-4">Features</h3>
            <p>{product.features}</p>
          </div>
          <div className="flex flex-col md:w-[35%]">
            <h3 className="uppercase text-xl mb-4">In the box</h3>
            <div>
              {product.includedItems.map((item) => (
                <p key={item.item}>
                  <span className="mr-3">{item.quantity}x</span>
                  {item.item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full h-[700px] sm:h-[550px] mb-12">
          <div className="flex flex-col gap-3 w-full sm:w-[50%] h-full">
            <div className="h-[50%] relative">
              <Image
                src={product.galleryFirstDesktop}
                alt={product.slug}
                fill
                className="hidden md:block rounded-md object-cover"
              />
              <Image
                src={product.galleryFirstTablet}
                alt={product.slug}
                fill
                className="hidden sm:block md:hidden rounded-md object-cover"
              />
              <Image
                src={product.galleryFirstMobile}
                alt={product.slug}
                fill
                className="block sm:hidden rounded-md object-cover"
              />
            </div>
            <div className="h-[50%] relative">
              <Image
                src={product.gallerySecondDesktop}
                alt={product.slug}
                fill
                className="hidden md:block rounded-md object-cover"
              />
              <Image
                src={product.gallerySecondTablet}
                alt={product.slug}
                fill
                className="hidden sm:block md:hidden rounded-md object-cover"
              />
              <Image
                src={product.gallerySecondMobile}
                alt={product.slug}
                fill
                className="block sm:hidden rounded-md object-cover"
              />
            </div>
          </div>
          <div className="w-full sm:w-[50%] h-full relative">
            <Image
              src={product.galleryThirdDesktop}
              alt={product.slug}
              fill
              className="hidden md:block rounded-md object-cover"
            />
            <Image
              src={product.galleryThirdTablet}
              alt={product.slug}
              fill
              className="hidden sm:block md:hidden rounded-md object-cover"
            />
            <Image
              src={product.galleryThirdMobile}
              alt={product.slug}
              fill
              className="block sm:hidden rounded-md object-cover"
            />
          </div>
        </div>
        <div>
          <h3 className="uppercase text-center text-xl font-bold mb-4">
            You may also like
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4  w-full">
            {product.relatedProducts.map((product) => (
              <div key={product.slug} className="w-full mb-4 flex flex-col items-center">
                <div className="w-full h-[150px] sm:h-[250px] relative mb-4">
                  <Image
                    src={product.imageDesktop}
                    alt={product.slug}
                    fill
                    className="hidden md:block rounded-md object-cover"
                  />
                  <Image
                    src={product.imageTablet}
                    alt={product.slug}
                    fill
                    className="hidden md:hidden sm:block rounded-md object-cover"
                  />
                  <Image
                    src={product.imageMobile}
                    alt={product.slug}
                    fill
                    className="block sm:hidden rounded-md object-cover"
                  />
                </div>
                <p className="uppercase font-bold text-xl mb-4">
                  {product.name}
                </p>
                <Link href={`/products/slug/${product.slug}`}>
                  <button className="uppercase p-[10px] bg-[#d87d4a] w-[180px] rounded-sm">
                    See product
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdductPage;
