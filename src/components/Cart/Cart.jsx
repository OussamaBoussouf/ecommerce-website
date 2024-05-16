import React, { useEffect, useRef, useState } from "react";
//ICON
import { X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/cartSlice";
//SANITY
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/client";
//
import { loadStripe } from "@stripe/stripe-js";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY);
  }
  return stripePromise;
};

function Cart({ onClose }) {
  const cart = useSelector((state) => state.products);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const drawerNode = useRef(null);
  const total = cart
    .reduce(
      (accumaltor, product) => (accumaltor += product.price * product.quantity),
      0
    )
    .toFixed(2);
  const handleClose = (event) => {
    if (event.target === drawerNode.current) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "visible");
  }, []);

  const items = cart.map((product) => {
    return {
      price: product.stripe_id,
      quantity: product.quantity,
    };
  });

  const checkoutOptions = {
    lineItems: items,
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    if (error) {
      setLoading(false);
    }
  };

  return (
    <div
      ref={drawerNode}
      onClick={handleClose}
      className="inset-0 z-50 bg-transparent-black fixed"
    >
      <div className="fixed h-screen pt-20 px-5 right-0 w-[90%] md:w-[550px] bg-white z-50 animate-drawer shadow-2xl">
        <button
          onClick={onClose}
          type="button"
          className="md:hover:bg-slate-300 bg-slate-200 float-end p-1 rounded-full absolute right-5 top-5"
        >
          <X size={20} />
        </button>
        <div className="w-full max-h-[65vh] overflow-y-auto">
          {cart.map((product) => (
            <div key={product.id} className="flex gap-4 mb-5">
              <img
                className="w-28 h-28 rounded-lg object-cover aspect-square"
                src={urlFor(product.image).url()}
                alt="blue shirt"
              />
              <div className="flex flex-col justify-between">
                <h2 className="text-sm sm:text-xl font-poppins-bold">
                  {product.name}
                </h2>
                <p className="text-sm md:text-sm mb-1">
                  {product.description.substring(0, 85) + "..."}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm md:text-[1rem]">
                    {product?.quantity} x ${product.price}
                  </p>
                  <span
                    onClick={() => dispatch(removeItem({ id: product.id }))}
                    className="text-red-500 cursor-pointer text-sm md:text-[1rem]"
                  >
                    Remove
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="flex justify-between items-center my-5">
            <b>Subtotal : </b> <span className="ps-">${total}</span>
          </p>
          <button
            type="button"
            disabled={(cart.length === 0 || loading) && true}
            onClick={redirectToCheckout}
            className={
              (cart.length === 0 || loading)
                ? "w-full bg-gray-300 py-3 font-poppins-bold rounded-lg text-white"
                : "w-full active:scale-95 bg-purple-700 py-3 font-poppins-bold rounded-lg text-white"
            }
          >
            {loading ? "LOADING..." : "CHECKOUT"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
