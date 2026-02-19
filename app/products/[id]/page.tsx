"use client";

import { useState } from "react";
import { useParams } from "next/navigation"; // ✅ get params in client
import { products } from "../../../data/products";
import Image from "next/image";

export default function ProductsId() {

  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  
  const params = useParams();
  const id = Number(params?.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return <p className="p-10 text-xl">Product not found</p>;
  }

  const sizes = [5, 5.5, 6, 6.6, 7, 7.5, 8, 8.8, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5];

  return (
    <section className="flex px-18">
      <div className="grid grid-cols-2 gap-40 my-5">
        <div className="flex justify-center rounded-2xl overflow-hidden">
          <Image
            src={product.img}
            alt={product.name}
            className="transition-transform duration-300 hover:scale-103"
          />
        </div>

        <div className="flex flex-col w-lg">
          <p className="text-1xl text-gray-500 pt-10">{product.category}</p>
          <p className="pt-8 text-3xl font-bold tracking-tight">{product.name}</p>
          <p className="pt-2 font-semibold">${product.price}</p>
          <p className="pt-5 tracking-tight font-stretch-50%">{product.description}</p>
          <p className="pt-3">
            <strong>SKU:</strong> {product.sku}
          </p>

          <div className="flex flex-col">
            <h3 className="flex justify-center w-full text-[20px] font-bold text-gray-500">
              Select Sizes
            </h3>

            <div className="grid grid-cols-4 gap-1">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`cursor-pointer rounded-lg border-2 py-1.5
                  ${selectedSize === size
                    ? "border-black bg-black text-white"
                    : "border-gray-400 hover:border-black text-gray-700"}`}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="flex justify-center mt-6 w-full rounded-2xl border p-3 bg-black cursor-pointer transition-transform duration-200 hover:scale-101">
              <button className="font-bold text-lg text-white">Add to Bag</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
