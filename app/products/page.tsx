import { products } from "../../data/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductList() {
  return (
    <section className="flex ">
      <div className="w-2xl p-6 bg-white shadow-lg rounded-xl space-y-6 mt-5">
        <div>
          <h2 className="text-xl font-bold mb-2">Sort By</h2>
          <select className="w-full border rounded-md p-2 mt-2 focus:outline-none">
            <option>Newest</option>
            <option>Oldest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Category</h2>
          <div className="space-y-2">
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

      <div className="grid grid-cols-3 gap-5 p-8">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} className="rounded-2xl shadow-md aspect-square overflow-hidden hover:shadow-xl hover:scale-101 transition-all duration-300 cursor-pointer">
          <div className="w-full h-2/3 overflow-hidden">
            <Image
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-3">
            <p className="text-red-600 font-semibold mt-1">{product.tag}</p>
            <p className="font-semibold text-[16px] mt-1">{product.name}</p>
            <p className="text-gray-500 mt-1">{product.category}</p>
            <p className="mt-1">${product.price}</p>
          </div>
        </Link>
        ))}
      </div>
    </section>
  );
}
