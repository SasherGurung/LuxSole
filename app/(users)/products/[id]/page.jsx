"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { products } from "../../../../data/products";
import Image from "next/image";

export default function ProductsId() {
  const [selectedSize, setSelectedSize] = useState(null);

  const params = useParams();
  const id = Number(params?.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <p className="flex justify-center items-center min-h-screen font-bold text-2xl sm:text-3xl">
        Product not found!
      </p>
    );
  }

  const sizes = [
    5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <div className="relative w-full h-96 sm:h-125 lg:h-screen rounded-2xl overflow-hidden">
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-gray-500 text-sm sm:text-base">
            {product.category}
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            {product.name}
          </h1>
          <p className="text-lg font-semibold">
            ${(product.priceCents / 100).toFixed(2)}
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            {product.description}
          </p>
          <p className="text-sm">
            <strong>SKU:</strong> {product.sku}
          </p>
          <div className="pt-4">
            <h3 className="text-lg font-semibold mb-4">Select Size</h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-lg border py-2 text-sm sm:text-base transition-all duration-200
                  ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "border-gray-400 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button
            disabled={!selectedSize}
            className={`mt-6 w-full py-3 rounded-xl font-bold text-lg transition-all duration-300
              ${
                selectedSize
                  ? "bg-black text-white hover:scale-[1.02]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            {selectedSize ? "Add to Bag" : "Select Size First"}
          </button>
        </div>
      </div>
    </section>
  );
}
