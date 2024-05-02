import React from "react";

import stripe from "../../assets/img/stripe.png";
import paypal from "../../assets/img/paypal.png";
import visa from "../../assets/img/visa.png";
import mastercard from "../../assets/img/mastercard.png";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="font-poppins px-3 sm:px-20 md:px-6">
      <div className="max-w-[1300px] mx-auto py-10">
        <div className="border-b-[1px] border-b-black mb-5 md:flex md:gap-3">
          <ul className="space-y-1 font-poppins-light mb-3 basis-1/6">
            <li className="font-poppins-bold">Categories</li>
            <li>
              <Link to="/products/1">Men</Link>
            </li>
            <li>
              <Link to="/products/2">Women</Link>
            </li>
            <li>
              <Link to="/products/3">Kids</Link>
            </li>
          </ul>
          <ul className="space-y-1 font-poppins-light mb-3 basis-1/6">
            <li className="font-poppins-bold">Links</li>
            <li>FAQ</li>
            <li>Pages</li>
            <li>Stories</li>
            <li>Contact us</li>
          </ul>
          <div className="mb-3 basis-2/6">
            <h3 className="font-poppins-bold">About</h3>
            <p className="font-poppins-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo architecto quibusdam ipsa est debitis dignissimos harum
              voluptatibus esse dolores quia.
            </p>
          </div>
          <div className="mb-3 basis-2/6">
            <h3 className="font-poppins-bold">Contact</h3>
            <p className="font-poppins-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo architecto quibusdam ipsa est debitis dignissimos harum
              voluptatibus esse dolores quia.
            </p>
          </div>
        </div>
        <div className="py-2 md:flex justify-between items-center">
          <h2 className="text-2xl font-poppins-bold mb-5 md:mb-0">
            LATITUDE <br />
            <span className="font-poppins-light text-sm align-middle">
              &copy; Copyright 2024. All Rights Reserved
            </span>
          </h2>
          <div className="flex space-x-3">
            <img src={stripe} alt="stripe icon" />
            <img src={paypal} alt="stripe icon" />
            <img src={visa} alt="stripe icon" />
            <img src={mastercard} alt="stripe icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
