import React from "react";
import {  getProductsByCategory } from "../../../../../../../prisma/seed";

const CategoryPage = async ({params}: {
    params: Promise<{category: string}>
})=> {
  const { category } = await params;
  const products = await getProductsByCategory(category);
  return (
    <>
      <h2 className="bg-black w-full p-8 md:12 text-white uppercase text-center font-bold">{category}</h2>
      <div className="flex flex-col gap-8 w-full mt-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col gap-4">
            
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
