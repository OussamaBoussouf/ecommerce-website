import React, { useEffect } from "react";
import { ButtonLink } from "../../components/ui/ButtonLink";
import successIcon from "../../assets/img/success-icon.webp";
//REDUX
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cartSlice";

function Success() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(clearCart());
  }, []);

  return (
    <section className="h-[calc(100vh-50px)]  w-full flex items-center justify-center">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-gray-300 w-[90vw] max-w-[700px] text-center rounded-lg py-5 px-5">
          <h2 className="font-poppins-bold text-2xl sm:text-3xl mb-5">
            Thank You For Your Purchase
          </h2>
          <img
            className="w-20 mx-auto mb-5"
            src={successIcon}
            alt="success-icon"
          />
          <p className="mb-5">
            If you have any question please email:{" "}
            <span className="text-red-500">latitude@example.com</span>
          </p>
          <ButtonLink
            path="/products/men"
            className="w-full max-w-[300px] active:scale-95 bg-purple-700 py-3 font-poppins-bold rounded-lg text-white"
          >
            CONTINUE SHOPPING
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export default Success;
