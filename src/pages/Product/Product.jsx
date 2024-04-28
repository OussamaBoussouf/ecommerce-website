import React, { useState } from "react";
import shirtOne from "../../assets/img/t-shirt_b1.webp";
import shirtTwo from "../../assets/img/t-shirt_b2.webp";
import shirtThree from "../../assets/img/t-shirt_b3.webp";
//ICON
import { ShoppingCart } from "lucide-react";
import { Truck } from "lucide-react";

function Product() {
  const [quantity, setQuantity] = useState(1);
  const shirts = [shirtOne, shirtTwo, shirtThree, shirtOne];
  const [activeImage, setActiveImage] = useState(shirts[0]);

  return (
    <section>
      <div className="max-w-[1100px] flex flex-col md:flex-row py-16 px-10 sm:px-20 md:px-5 mx-auto gap-5">
        <div className="flex flex-col gap-3 md:flex-row-reverse ">
          <img
            className="h-full w-full object-cover object-center"
            src={activeImage}
            alt="product shirt"
          />
          <div className="w-full flex justify-between md:flex-col">
            <img
              onClick={() => setActiveImage(shirts[0])}
              className="cursor-pointer w-24 aspect-square object-center object-cover"
              src={shirts[0]}
              alt="t-shirt"
            />
            <img
              onClick={() => setActiveImage(shirts[1])}
              className="cursor-pointer w-24 aspect-square object-center object-cover"
              src={shirts[1]}
              alt="t-shirt"
            />
            <img
              onClick={() => setActiveImage(shirts[2])}
              className="cursor-pointer w-24 aspect-square object-center object-cover"
              src={shirts[2]}
              alt="t-shirt"
            />
            <img
              onClick={() => setActiveImage(shirts[0])}
              className="cursor-pointer w-24 aspect-square object-center object-cover"
              src={shirts[3]}
              alt="t-shirt"
            />
          </div>
        </div>
        <div className="md:w-2/4">
          <h2 className="text-4xl font-poppins-bold mb-5 md:mb-3">
            White T-shirt
          </h2>
          <p className="text-2xl mb-2 font-poppins-bold">$12.20</p>
          <p className="flex items-center w-fit mb-5">
            <Truck className="me-3" /> 2-4 Day Shipping
          </p>
          <div className="mb-5 flex items-center w-fit">
            <button
              onClick={() => setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))}
              type="button"
              className="bg-slate-300 px-2 py-1 active:bg-slate-400"
            >
              -
            </button>
            <div className="w-10 flex items-center justify-center">
              {quantity}
            </div>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              type="button"
              className="bg-slate-300 px-2 py-1 active:bg-slate-400"
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="px-4 py-2 text-sm bg-purple-700 rounded-lg text-white mb-5 flex items-center gap-x-2 active:scale-95"
          >
            <ShoppingCart /> ADD TO CART
          </button>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur voluptatum dolorum, soluta iusto repellat sequi ex
            exercitationem sapiente in quidem aspernatur at ea praesentium aut
            similique eos sed fugit. Quo modi veritatis temporibus.
          </p>

          <hr />
          <p className="py-2">Type : T-shirt</p>
        </div>
      </div>
    </section>
  );
}

export default Product;
