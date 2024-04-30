import { ButtonLink } from "../ui/ButtonLink";
import heroImage from "../../assets/img/hero-2.webp";

function HeroSection() {
  return (
    <section className="font-poppins relative">
      <div>
        <img
          src={heroImage}
          className="h-[calc(100vh-50px)] max-h-[700px] w-screen object-cover"
          alt="woman wears an orange jacket"
        />
      </div>
      <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl w-[90vw] max-w-[1300px] font-poppins-bold text-white leading-10 lg:leading-[70px] mb-8 ">
          Discover your personal style with our premium clothing collection
        </h1>
        <ButtonLink
          path="/products/women"
          className="text-sm md:text-lg bg-white transition-colors duration-700 ease-in-out hover:bg-black hover:text-white font-poppins-bold px-8 py-3"
        >
          SHOP NOW
        </ButtonLink>
      </div>
    </section>
  );
}

export default HeroSection;
