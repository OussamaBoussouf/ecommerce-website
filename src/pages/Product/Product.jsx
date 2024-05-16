import React, { useState } from "react";
//ICON
import { ShoppingCart } from "lucide-react";
import { Truck } from "lucide-react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
//REDUX
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
//SANITY
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/client";
import SpinLoading from "../../components/ui/SpinLoading";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

function Product() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const id = useParams().id;
  const {
    data: product,
    loading,
    error,
  } = useFetch(`*[_type == "product" && _id == "${id}"]{
    "id":_id,
    product_name,
    product_price,
    product_description,
    "image": product_image.asset,
    "sub_images": sub_images[].asset,
    stripe_id,
    type
  }`);
  const [activeImage, setActiveImage] = useState(null);

  if (loading) return <SpinLoading/>;

  if (error) return <p className="text-red-500">an Error occured</p>;

  return (
    <section className="px-5 sm:px-20 md:px-5 lg:px-5">
      <div className="max-w-[1100px] flex flex-col md:flex-row py-10 mx-auto gap-5">
        <div className="flex flex-col lg:flex-row-reverse gap-3 md:w-2/4">
          <img
            className="h-full w-full aspect-square object-cover object-center"
            src={activeImage ? activeImage : urlFor(product[0].image).url()}
            alt="product shirt"
          />
          <div className="flex gap-[6.66%] lg:flex-col h-24 lg:h-full lg:w-[100px]">
            <img
              className="cursor-pointer w-1/5 lg:w-full h-full max-h-24 aspect-square object-center object-cover"
              src={urlFor(product[0].image).url()}
              onClick={() => setActiveImage(urlFor(product[0].image).url())}
              alt="product shirt"
            />
            {product[0].sub_images.map((image, index) => (
              <img
                key={index}
                className="cursor-pointer w-1/5 lg:w-full h-full max-h-24 aspect-square object-center object-cover"
                src={urlFor(image).url()}
                onClick={() => setActiveImage(urlFor(image).url())}
                alt="t-shirt"
              />
            ))}
          </div>
        </div>
        <div className="md:w-2/4">
          <h2 className="text-4xl font-poppins-bold mb-1 md:mb-3">
            {product[0].product_name}
          </h2>
          <p className="text-2xl mb-2 font-poppins-bold">
            ${product[0].product_price}
          </p>
          <p className="flex items-center w-fit mb-5">
            <Truck className="me-3" /> 2-4 Day Shipping
          </p>
          <div className="mb-5 flex items-center w-fit">
            <button
              onClick={() => setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))}
              type="button"
              className="bg-slate-300 px-2 py-1 active:bg-slate-400"
            >
              -
            </button>
            <div className="w-10 flex items-center justify-center">
              {quantity}
            </div>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              type="button"
              className="bg-slate-300 px-2 py-1 active:bg-slate-400"
            >
              +
            </button>
          </div>
          <button
            type="button"
            aria-label="Add product to cart"
            className="px-4 py-2 text-sm bg-purple-700 rounded-lg text-white mb-5 flex items-center gap-x-2 active:scale-95"
            onClick={() =>
              dispatch(
                addToCart({
                  id: product[0].id,
                  name: product[0].product_name,
                  price: product[0].product_price,
                  description: product[0].product_description,
                  image: product[0].image,
                  stripe_id: product[0].stripe_id,
                  quantity,
                })
              )
            }
          >
            <ShoppingCart size={20} /> ADD TO CART
          </button>
          <p className="mb-3">{product[0].product_description}</p>

          <hr />
          <p className="py-2">Type : {product[0].type}</p>
        </div>
      </div>
    </section>
  );
}

export default Product;
