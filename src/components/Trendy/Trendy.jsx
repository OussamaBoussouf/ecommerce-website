import React from "react";
import ourClothes from "../../assets/img/our-clothes.jpg";
import { ButtonLink } from "../ui/ButtonLink";

function Trendy() {
  return (
    <section className="bg-light-green font-poppins">
      <div className="max-w-[1300px] py-16 px-5 lg:py-20 mx-auto lg:flex lg:flex-row-reverse lg:items-start md:gap-5">
        <div className="mb-5 lg:mb-0 lg:basis-[50%]">
          <img src={ourClothes} alt="clothe collection" className="mx-auto lg:mx-0 w-full max-w-[700px]" />
        </div>
        <div className="max-w-[700px] mx-auto lg:mx-0 lg:mt-5 text-center lg:text-start lg:basis-[50%] ">
          <h2 className="text-white font-poppins-bold text-2xl sm:text-3xl md:text-4xl md:leading-[50px] mb-3">
            Look and feel confident in our stylish and trendy clothes
          </h2>
          <p className="text-white text-sm sm:text-lg leading-8 lg:leading-10 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magni
            impedit id aperiam adipisci nulla sint architecto a repellendus
            autem! sit amet consectetur, adipisicing elit. Voluptatum, possimus
            deleniti? Distinctio labore error cum debitis incidunt
          </p>
          <ButtonLink
            path="/products/men"
            className="px-6 py-3 rounded-lg bg-light-blue font-poppins-bold text-dark-blue hover:shadow-xl"
          >
            Shop now
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export default Trendy;
