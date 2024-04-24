import React from "react";

import shirtOne from "../../assets/img/shirt_1.jpg";
import shirtTwo from "../../assets/img/shirt_2.jpg";
import shirtThree from "../../assets/img/shirt_3.webp";
import shirtFour from "../../assets/img/shirt_5.jpg";


function NewArrivals() {
  const products = [
    {
      id: 1,
      img: shirtOne,
      price: 12.20,
      title: "White Shirt",
    },
    {
      id: 2,
      img: shirtTwo,
      price: 12.20,
      title: "Light blue shirt",
    },
    {
      id: 3,
      img: shirtThree,
      price: 12.20,
      title: "White shirt",
    },
    {
      id: 4,
      img: shirtFour,
      price: 12.20,
      title: "Dark blue shirt",
    },
  ];

  return (
    <section className="max-w-[1000px] mx-auto py-24 px-3 md:px-6 lg:px-0">
      <div>
        <h2 className="font-poppins-bold text-3xl mb-8">New Arrivals</h2>
        <div className="grid gap-y-4 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div className="w-56 flex-shrink-0" key={product.id}>
            <div className="h-80 overflow-hidden mb-2">
              <img src={product.img} alt="shirt image" className="h-full w-full object-cover rounded-lg mb-3 hover:scale-150 transition ease-in-out duration-200" />
            </div>
              <p className="font-poppins-bold text-xl">{product.title}</p>
              <p>price: £{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
