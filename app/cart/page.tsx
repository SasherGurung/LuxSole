import React from "react";
import Image from "next/image";
import adiZeroEvoImg from "../../public/productsImg/adizero-evo.png";
import deleteImg from "../../public/assets/delete.png";

function Cart() {
  return (
    <section className="flex justify-between py-20 px-22 gap-11">
      <div className="w-full">
        <p className="text-5xl tracking-widest mb-2">
          <strong>YOUR BAG</strong>
        </p>
        <p className="tracking-tight text-[15px] text-gray-600">
          Items in your bag are not reserved — check out now to make them yours.
        </p>
        <div className="flex border rounded-md overflow-hidden mt-4">
          <Image src={adiZeroEvoImg} className="" width={220} height={220} alt="AdiZero"></Image>
          <div className="flex w-full justify-between">
            <div className="text-gray-700 m-5">
              <p className="text-xl font-bold">D.O.N. ISSUE 7 Shoes</p>
              <p className="text-[16px] tracking-tight mb-20">Size:12</p>
              <select className="border rounded-md px-6 py-2.5 bg-gray-100">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div className="flex justify-center h-20 w-20">
              <button className="overflow-hidden">
                <Image src={deleteImg} className="cursor-pointer hover:scale-110 transition-transform duration-100" width={25} height={25} alt="Delete"></Image>
              </button>
            </div>
          </div>
        </div>
        <div className="flex border rounded-md overflow-hidden mt-4">
          <Image src={adiZeroEvoImg} className="" width={220} height={220} alt="AdiZero"></Image>
          <div className="flex w-full justify-between">
            <div className="text-gray-700 m-5">
              <p className="text-xl font-bold">D.O.N. ISSUE 7 Shoes</p>
              <p className="text-[16px] tracking-tight mb-20">Size:12</p>
              <select className="border rounded-md px-6 py-2.5 bg-gray-100">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div className="flex justify-center h-20 w-20">
              <button className="overflow-hidden">
                <Image src={deleteImg} className="cursor-pointer hover:scale-110 transition-transform duration-100" width={25} height={25} alt="Delete"></Image>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col flex w-2/3">
        <p className="text-4xl tracking-wider mb-2">
          <strong>ORDER SUMMARY</strong>
        </p>
        <div className="grid grid-cols-2">
          <div className="ml-5 mt-3 text-gray-700">
            <p>Sub Total</p>
            <p>Estimated Shipping & Handling</p>
            <p>Estimated Tax</p>
            <p className="mt-4 text-[20px] tracking-wider">
              <strong>Total</strong>
            </p>  
          </div>
          <div className="flex flex-col items-end px-5 ml-5 mt-3">
            <p>$111</p>
            <p>$15</p>
            <p>$126</p>
            <p className="mt-4 tracking-tight"><strong>$300</strong></p>
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-4">
            <button className="flex justify-center border font-bold text-white bg-black py-5 rounded-4xl hover:bg-gray-300 hover:text-black cursor-pointer hover:scale-102 transition-transform duration-200">Checkout</button>
            <button className="flex justify-center border font-bold py-5 rounded-4xl cursor-pointer hover:scale-102 transition-transform duration-200">Esewa / Khalti</button>
          </div>
      </div>
    </section>
  );
}

export default Cart;
