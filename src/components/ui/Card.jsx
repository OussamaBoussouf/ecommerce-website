import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/client";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

function Card({product}) {

  return (
    <div key={product.id}>
      <div className="overflow-hidden mb-3">
        <img
          src={urlFor(product.image).url()}
          width={278}
          height={417}
          alt="shirt image"
          className="w-full h-full object-cover object-center lg:hover:scale-150 transition ease-in-out duration-200"
        />
      </div>
      <p className="font-poppins-bold text-sm md:text-lg">{product.product_name}</p>
      <p className="text-sm md:text-[1rem]">price: ${product.product_price}</p>
    </div>
  );
}

export default Card;
