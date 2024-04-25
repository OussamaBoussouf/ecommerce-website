import React, { useState } from "react";
import product from "../../assets/img/shirt_5.jpg";
//ICON
import { ShoppingCart } from "lucide-react";

function Product() {
  const [quantity, setQuantity] = useState(1);

  return (
    <section>
      <div className="max-w-[1100px] flex flex-col md:flex-row py-16 px-10 sm:px-20 md:px-10 mx-auto gap-10">
        <div className="md:w-2/4">
          <img
            className="h-full w-full rounded-xl aspect-square object-cover"
            src={product}
            alt="product shirt"
          />
        </div>
        <div className="md:w-2/4">
          <h2 className="text-4xl font-poppins-bold mb-5 md:mb-3">
            White shirt
          </h2>
          <p className="text-3xl mb-4 font-poppins-bold">$12.20</p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur voluptatum dolorum, soluta iusto repellat sequi ex
            exercitationem sapiente in quidem aspernatur at ea praesentium aut
            similique eos sed fugit. Quo modi veritatis temporibus.
          </p>
          <div className="mb-5 flex items-center w-fit">
            <button
              onClick={() => setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))}
              type="button"
              className="bg-slate-300 px-4 py-2 active:bg-slate-400"
            >
              -
            </button>
            <div className="w-10 flex items-center justify-center">
              {quantity}
            </div>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              type="button"
              className="bg-slate-300 px-4 py-2 active:bg-slate-400"
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="px-6 py-3 bg-black text-white mb-5 flex items-center gap-x-5 active:scale-95"
          >
            <ShoppingCart /> ADD TO CART
          </button>
          <hr />
          <p className="py-2">Type : T-shirt</p>
        </div>
      </div>
    </section>
  );
}

export default Product;
