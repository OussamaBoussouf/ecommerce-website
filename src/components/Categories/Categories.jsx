import React from "react";
import menCollection from "../../assets/img/men-collection.jpg";
import womenCollection from "../../assets/img/women-collection.jpg";
import kidsCollection from "../../assets/img/kids-collection.jpg";
import { ButtonLink } from "../../components/ui/ButtonLink";

function Categories() {
  return (
    <section className="px-4 md:px-5 max-w-[1100px] mx-auto py-10">
      <div>
        <h2 className="font-poppins-bold text-3xl mb-8">Categories</h2>
        <div className="md:grid md:grid-cols-2 md:gap-x-2">
          <div className="h-56 overflow-hidden md:h-full relative mb-2 rounded-lg md:row-span-2">
            <img
              className="h-full w-full object-cover"
              src={menCollection}
              alt="men collection"
            />
            <div className="absolute z-10 bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl md:text-3xl mb-2 font-poppins-bold">
                Men Collection
              </h3>
              <p className="text-[.7rem] md:text-sm mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium a architecto veritatis
              </p>
              <ButtonLink
                path="/product/1"
                className="px-3 py-2 md:px-6 md:py-3 bg-white text-black text-sm rounded-lg hover:bg-blue-400 hover:text-white"
              >
                Discover more
              </ButtonLink>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>
          <div className="h-56 overflow-hidden relative mb-2 bg-blue-500 rounded-lg">
            <img
              className="h-full w-full object-cover"
              src={womenCollection}
              alt="men collection"
            />
            <div className="absolute z-10 bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl md:text-3xl mb-2 font-poppins-bold">
                Women Collection
              </h3>
              <p className="text-[.7rem] md:text-sm mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium a architecto veritatis
              </p>
              <ButtonLink
                path="/product/2"
                className="px-3 py-2 md:px-6 md:py-3 bg-white text-black text-sm rounded-lg hover:bg-blue-400 hover:text-white"
              >
                Discover more
              </ButtonLink>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>
          <div className="h-56 overflow-hidden relative bg-purple-400 rounded-lg">
            <img
              className="h-full w-full object-cover"
              src={kidsCollection}
              alt="men collection"
            />
            <div className="absolute z-10 bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl md:text-3xl mb-2 font-poppins-bold">
                Kids Collection
              </h3>
              <p className="text-[.7rem] md:text-sm mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium a architecto veritatis
              </p>
              <ButtonLink
                path="/product/1"
                className="px-3 py-2 md:px-6 md:py-3 bg-white text-black text-sm rounded-lg hover:bg-blue-400 hover:text-white"
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
