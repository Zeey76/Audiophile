import { getProductsByCategory } from "../../../../../../../prisma/seed";
import Image from "next/image";
import Link from "next/link";

// Generate static pages for specific categories
export async function generateStaticParams(): Promise<{ category: string }[]> {
  const categories = ["earphones", "headphones", "speakers"];
  return categories.map((category) => ({
    category: category.toString(),
  }));
}

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  const products = await getProductsByCategory(category);

  return (
    <>
      <h2 className="bg-black p-12 w-full text-white uppercase text-2xl text-center">
        {category}
      </h2>
      <div className="pt-16 md:px-16 px-8  mx-auto">
        {products.map((product) => (
          <div key={product.slug} className="mb-16">
            <div className="flex flex-col category gap-6 w-full items-center justify-center">
              <div className="category-image relative w-full sm:h-[500px] h-[400px]">
                <Image
                  src={product.categoryImageDesktop}
                  alt={product.slug}
                  fill
                  className="hidden md:block rounded-md object-cover"
                />
                <Image
                  src={product.categoryImageTablet}
                  alt={product.slug}
                  fill
                  className="hidden sm:block md:block rounded-md object-cover"
                />
                <Image
                  src={product.categoryImageMobile}
                  alt={product.slug}
                  fill
                  className="block sm:hidden rounded-md object-cover"
                />
              </div>
              <div className="category-text flex flex-col items-center">
                {product.isNew && (
                  <p className="uppercase text-[#d87d4a] mb-2">New product</p>
                )}
                <p className="text-3xl font-bold uppercase mb-6">
                  {product.name}
                </p>
                <p className="mb-6 text-center description">
                  {product.description}
                </p>
                <Link href={`/products/slug/${product.slug}`}>
                  <button className="uppercase p-[10px] bg-[#d87d4a] w-[180px] rounded-sm">
                    See product
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
