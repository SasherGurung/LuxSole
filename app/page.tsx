import Link from "next/link";
import Image from "next/image";
import arrowImg from "../public/assets/right-arrow.png";
import introNikeImg from "../public/assets/intro-nike.png";
import introAdidasImg from "../public/assets/intro-adidas.png";
import kobe3ProtoImg from "../public/productsImg/kobe3proto.png";
import nikeGTImg from "../public/productsImg/nikegt.png";
import levron23EliteImg from "../public/productsImg/lebron23elite.png";

export default function Homepage() {
  return (
    <section className="flex flex-col min-h-screen w-full">
      <div className="flex items-center w-full h-14 bg-amber-100 justify-around shadow-md">
        <button className="hover:text-blue-500 font-bold transform transition-transform duration-300 hover:scale-105">
          <Link href={"/products"}>SHOP NOW</Link>
        </button>
        <h1 className="hover:text-blue-500 cursor-pointer font-bold transform transition-transform duration-300 hover:scale-105">
          SAVE 30% NOW
        </h1>
        <Link
          href={"/products"}
          className="transform transition-transform duration-200 hover:scale-115"
        >
          <Image src={arrowImg} alt="arrow" height={30} width={30} />
        </Link>
      </div>

      <div className="text-3xl font-bold p-6">
        <h1 className="flex justify-center hover:scale-103 cursor-pointer hover:underline transition-all duration-500 tracking-tighter">
          DAY TO NIGHT COLLECTIONS
        </h1>
      </div>

      <div className="grid grid-cols-2 w-full gap-1">
        <Link
          href="/products"
          className="relative w-full aspect-square transform transition-transform duration-300 hover:scale-99"
        >
          <Image
            src={introAdidasImg}
            alt="Adidas"
            fill
            className="object-cover"
          />
        </Link>

        <Link
          href="/products"
          className="relative w-full aspect-square transform transition-transform duration-300 hover:scale-99"
        >
          <Image src={introNikeImg} alt="Nike" fill className="object-cover" />
        </Link>
      </div>

      <div className="font-bold p-8 flex flex-col">
        <h1 className="cursor-pointer hover:underline hover:scale-103 transition-all duration-500 tracking-tighter text-3xl flex justify-center">
          POPULAR RIGHT NOW
        </h1>
        <div className="flex justify-center mt-4">
          <button className=" border-2 px-3 py-1 rounded-lg items-center transition-transform duration-300 hover:scale-108">
            <Link href={"/products"}>SHOP NOW</Link>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 p-7">
        <div className="rounded-2xl shadow-md aspect-square overflow-hidden hover:shadow-xl hover:scale-101 transition-all duration-300">
          <div className="w-full h-2/3 overflow-hidden">
            <Image
              src={kobe3ProtoImg}
              alt="Kobe 3 Proto"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <p className="text-red-600 font-semibold mt-1">Just In</p>
            <p className="font-semibold text-[16px] mt-1">Kobe 3 Protro</p>
            <p className="text-gray-500 mt-1">Basketball Shoes</p>
            <p className="mt-1">$220</p>
          </div>
        </div>
        <div className="rounded-2xl shadow-md aspect-square overflow-hidden hover:shadow-xl hover:scale-101 transition-all duration-300">
          <div className="w-full h-2/3 overflow-hidden">
            <Image
              src={levron23EliteImg}
              alt="Nike GT"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <p className="text-red-600 font-semibold mt-1">Best Seller</p>
            <p className="font-semibold text-[16px] mt-1">LeBron XXIII Elite</p>
            <p className="text-gray-500 mt-1">Basketball Shoes</p>
            <p className="mt-1">$220</p>
          </div>
        </div>
        <div className="rounded-2xl shadow-md aspect-square overflow-hidden hover:shadow-xl hover:scale-101 transition-all duration-300">
          <div className="w-full h-2/3 overflow-hidden">
            <Image
              src={nikeGTImg}
              alt="Nike GT"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <p className="text-red-600 font-semibold mt-1">Coming Soon</p>
            <p className="font-semibold text-[16px] mt-1">
              Nike G.T. Cut 4 CNY
            </p>
            <p className="text-gray-500 mt-1">Basketball Shoes</p>
            <p className="mt-1">$220</p>
          </div>
        </div>
      </div>
    </section>
  );
}
