import React from "react";

import shirtOne from "../../assets/img/shirt_1.jpg";
import shirtTwo from "../../assets/img/shirt_2.jpg";
import shirtThree from "../../assets/img/shirt_3.webp";
import shirtFour from "../../assets/img/shirt_5.jpg";
import Card from "../ui/Card";


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
    <section className="max-w-[1300px] mx-auto py-24 px-3 md:px-6 lg:px-0">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="font-poppins-bold text-3xl mb-8">New Arrivals</h2>
        <div className="grid gap-y-4 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
