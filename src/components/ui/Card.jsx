import React from "react";

function Card({product}) {
  //w-56
  return (
    <div key={product.id}>
      <div className="h-60 md:h-80 overflow-hidden mb-2">
        <img
          src={product.img}
          alt="shirt image"
          className="h-full w-full object-cover rounded-lg mb-3 lg:hover:scale-150 transition ease-in-out duration-200"
        />
      </div>
      <p className="font-poppins-bold text-xl">{product.title}</p>
      <p>price: £{product.price}</p>
    </div>
  );
}

export default Card;
