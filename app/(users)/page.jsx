"use client";

import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

import arrowImg from "../../public/assets/right-arrow.png";
import introNikeImg from "../../public/assets/intro-nike.png";
import introAdidasImg from "../../public/assets/intro-adidas.png";

export default function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const featuredProducts = products.slice(0, 3);

  return (
    <section className="flex flex-col min-h-screen w-full mt-16">
      <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-around bg-amber-100 shadow-md px-4 py-3 gap-2 text-center">
        <Link
          href="/products"
          className="font-bold hover:text-blue-500 transition-transform duration-300 hover:scale-105"
        >
          SHOP NOW
        </Link>
        <h1 className="font-bold hover:text-blue-500 transition-transform duration-300 hover:scale-105 cursor-pointer">
          SAVE 30% NOW
        </h1>
        <Link
          href="/products"
          className="transition-transform duration-200 hover:scale-110"
        >
          <Image src={arrowImg} alt="arrow" height={30} width={30} />
        </Link>
      </div>
      <div className="py-8 px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center tracking-tight hover:underline transition-all duration-500 cursor-pointer">
          DAY TO NIGHT COLLECTIONS
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-2 px-2 sm:px-4">
        <Link
          href="/products"
          className="relative w-full aspect-square overflow-hidden rounded-xl"
        >
          <Image
            src={introAdidasImg}
            alt="Adidas"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </Link>
        <Link
          href="/products"
          className="relative w-full aspect-square overflow-hidden rounded-xl"
        >
          <Image
            src={introNikeImg}
            alt="Nike"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>
      <div className="py-10 px-4 flex flex-col items-center gap-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight hover:underline transition-all duration-500 cursor-pointer">
          POPULAR RIGHT NOW
        </h1>
        <Link
          href="/products"
          className="border-2 px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300"
        >
          SHOP NOW
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-10 pb-10">
        {featuredProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-white">
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
                  $ {(product.priceCents / 100).toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
