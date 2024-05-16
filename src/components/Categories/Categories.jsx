import React from "react";
import menCollection from "../../assets/img/men-collection.jpg";
import womenCollection from "../../assets/img/women-collection.jpg";
import { ButtonLink } from "../../components/ui/ButtonLink";

function Categories() {
  return (
    <section className="px-4 md:px-5 my-20">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="font-poppins-bold text-3xl mb-8">Collections</h2>
        <div className="md:flex md:gap-x-2">
          <div className="w-full overflow-hidden mb-5 md:mb-0  md:w-1/2 md:h-full relative">
            <img
              className="h-[400px] w-full object-cover"
              src={menCollection}
              alt="men collection"
            />
            <div className="absolute z-10 bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl md:text-3xl mb-2 font-poppins-bold">
                Men Collection
              </h3>
              <p className="text-[.7rem] md:text-sm mb-3">
                Elevate your wardrobe with our men's clothing collection,
                blending classic craftsmanship with contemporary style. Discover
                tailored suits, casual shirts, and essential accessories that
                exude confidence and versatility. From refined formal wear to
                laid-back essentials, each piece is designed for comfort and
                durability.
              </p>
              <ButtonLink
                path="/products/men"
                className="px-3 py-2 md:px-6 md:py-3 font-poppins-bold bg-white text-black text-sm hover:bg-blue-500 hover:text-white"
              >
                Discover more
              </ButtonLink>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>
          <div className="w-full overflow-hidden md:w-1/2 md:h-full relative">
            <img
              className="h-[400px] w-full object-cover"
              src={womenCollection}
              alt="men collection"
            />
            <div className="absolute z-10 bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl md:text-3xl mb-2 font-poppins-bold">
                Women Collection
              </h3>
              <p className="text-[.7rem] md:text-sm mb-3">
                Discover timeless elegance and modern trends with our women's
                clothing collection. From chic dresses to versatile tops and
                cozy knitwear, find the perfect pieces to elevate your style.
                Explore a range of sizes and styles crafted with quality
                materials for effortless sophistication.
              </p>
              <ButtonLink
                path="/products/women"
                className="px-3 py-2 md:px-6 md:py-3 bg-white text-black text-sm font-poppins-bold hover:bg-blue-500 hover:text-white"
              >
                Discover more
              </ButtonLink>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
