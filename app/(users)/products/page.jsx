"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4 bg-white shadow-lg rounded-xl p-6 space-y-6">
          <div>
            <h2 className="text-lg font-bold mb-2 mt-10">Sort By</h2>
            <select className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black">
              <option>Newest</option>
              <option>Oldest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Category</h2>
            <div className="space-y-2 text-sm sm:text-base">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" />
                Running Shoe
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" />
                Basketball Shoe
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" />
                Casual Shoe
              </label>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-white"
              >
                <div className="relative w-full h-64 sm:h-72 lg:h-80">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <p className="text-red-600 font-semibold">{product.tag}</p>
                  <p className="font-semibold text-base sm:text-lg">
                    {product.name}
                  </p>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {product.category}
                  </p>
                  <p className="font-medium">
                    ${(product.priceCents / 100).toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 border rounded-md
        ${
          currentPage === index + 1
            ? "bg-black text-white"
            : "hover:bg-gray-200"
        }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
