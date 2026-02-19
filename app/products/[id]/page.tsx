import adiZeroEvoImg from "../../../public/productsImg/adizero-evo.png";
import Image from "next/image";

function ProductsId() {
  return (
    <section className="flex px-18">
      <div className="grid grid-cols-2 gap-40">
        <div className="border">
          <Image src={adiZeroEvoImg} alt="Adizero Wco"></Image>
        </div>
        <div className="flex flex-col w-lg">
          <p className="text-1xl text-gray-500 pt-10">Casual Shoes</p>
          <p className="pt-8 text-3xl font-bold tracking-tight">AdiZero EVO</p>
          <p className="pt-2 font-semibold">$220</p>
          <p className="pt-5 tracking-tight font-stretch-50%">
            A modern Protro upgrade of the classic Kobe 3, built for explosive
            speed, low-to-the-ground control, and elite court responsiveness.
            Lightweight cushioning and enhanced traction make it perfect for
            quick guards.
          </p>
          <p className="pt-3"><strong>SKU:</strong> JDKS</p>

          <div className="flex flex-col">
            <h3 className="flex justify-center w-full text-[20px] font-bold text-gray-500">Select Sizes</h3>
            <div className="grid grid-cols-5 gap-1">
              <button className="cursor-pointer rounded-lg border-2 border-gray-400 hover:border-black py-3">7</button>
              <button className="cursor-pointer rounded-lg border-2 border-gray-400 hover:border-black py-3">8</button>
              <button className="cursor-pointer rounded-lg border-2 border-gray-400 hover:border-black py-3">9</button>
              <button className="cursor-pointer rounded-lg border-2 border-gray-400 hover:border-black py-3">10</button>
              <button className="cursor-pointer rounded-lg border-2 border-gray-400 hover:border-black py-3">11</button>
              <button className="cursor-pointer rounded-lg border-2 border-gray-400 hover:border-black py-3">12</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsId;
