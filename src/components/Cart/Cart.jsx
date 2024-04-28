import React, { useEffect, useRef } from "react";
//ICON
import { X } from "lucide-react";

import shirtOne from "../../assets/img/t-shirt_1.webp";
import shirtTwo from "../../assets/img/t-shirt_b2.webp";
import shirtThree from "../../assets/img/t-shirt_b3.webp";
import shirtFour from "../../assets/img/t-shirt-navy1.webp";

function Cart({ onClose }) {
  const porducts = [
    {
      id: 1,
      img: shirtOne,
    },
    {
      id: 2,
      img: shirtTwo,
    },
    {
      id: 3,
      img: shirtThree,
    },
    {
      id: 4,
      img: shirtFour,
    },
  ];

  const drawerNode = useRef(null);
  const handleClose = (event) => {
    if (event.target === drawerNode.current) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "visible");
  }, []);

  return (
    <div
      ref={drawerNode}
      onClick={handleClose}
      className="inset-0 z-50 bg-transparent-black fixed"
    >
      <div className="fixed h-screen pt-20 px-5 right-0 w-[90%] md:w-[550px] bg-white z-50 animate-drawer shadow-2xl">
        <button
          onClick={onClose}
          type="button"
          className="lg:hover:bg-slate-300 bg-slate-200 float-end p-1 rounded-full absolute right-5 top-5"
        >
          <X size={20} />
        </button>
        <div className="w-full max-h-[65vh] overflow-y-auto">
          {porducts.map((product) => (
            <div key={product.id} className="flex gap-4 mb-5">
              <img
                className="w-28 h-28 rounded-lg object-cover aspect-square"
                src={product.img}
                alt="blue shirt"
              />
              <div>
                <h2 className="sm:text-xl font-poppins-bold">White t-shirt</h2>
                <p className="text-xs md:text-sm mb-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis soluta est cupiditate dolorum...
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm md:text-[1rem]">1 x $12.20</p>
                  <span className="text-red-500 text-sm md:text-[1rem]">
                    Remove
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="flex justify-between items-center my-5">
            <b>Subtotal : </b> <span className="ps-">$99</span>
          </p>
          <button
            type="button"
            className="w-full active:scale-95 bg-purple-700 py-3 font-poppins-bold rounded-lg text-white"
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
