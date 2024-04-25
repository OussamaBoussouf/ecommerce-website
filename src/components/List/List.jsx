import React from "react";
//IMAGES
import shirtOne from "../../assets/img/shirt_1.jpg";
import shirtTwo from "../../assets/img/shirt_2.jpg";
import shirtThree from "../../assets/img/shirt_3.webp";
import shirtFour from "../../assets/img/shirt_5.jpg";
import Card from "../../components/ui/Card";

function List({categorie}) {
  const products = [
    {
      id: 1,
      img: shirtOne,
      price: 12.2,
      title: "White Shirt",
    },
    {
      id: 2,
      img: shirtTwo,
      price: 12.2,
      title: "Light blue shirt",
    },
    {
      id: 3,
      img: shirtThree,
      price: 12.2,
      title: "White shirt",
    },
    {
      id: 4,
      img: shirtFour,
      price: 12.2,
      title: "Dark blue shirt",
    },
    {
      id: 6,
      img: shirtOne,
      price: 12.2,
      title: "White Shirt",
    },
    {
      id: 7,
      img: shirtTwo,
      price: 12.2,
      title: "Light blue shirt",
    },
    {
      id: 8,
      img: shirtThree,
      price: 12.2,
      title: "White shirt",
    },
    {
      id: 9,
      img: shirtFour,
      price: 12.2,
      title: "Dark blue shirt",
    },
  ];

  return (
    <div className="grid gap-x-5 gap-y-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-auto-fill">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default List;
