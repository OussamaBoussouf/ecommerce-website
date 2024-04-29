import React, { useState } from "react";
//ICONS
import { AlignJustify } from "lucide-react";
import { UserRound } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { X } from "lucide-react";
//REDUX
import { useSelector } from "react-redux";

//
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useSelector((state) => state.products);

  return (
    <nav className="font-poppins h-[50px] px-3 py-2 md:px-6">
      <div className="flex justify-between max-w-[1300px] items-center lg:mx-auto">
        {/* LEFT BAR */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-5">
            <div className="hover:font-bold">
              <Link to="/products/1">Men</Link>
            </div>
            <div className="hover:font-bold">
              <Link to="/products/2">Women</Link>
            </div>
            <div className="hover:font-bold">
              <Link to="/products/3">Kids</Link>
            </div>
          </div>
        </div>
        {/* LOGO */}
        <div>
          <Link to="/" className="text-2xl font-poppins-bold">
            LATITUDE
          </Link>
        </div>
        {/* RIGHT BAR */}
        <div className="relative">
          <div className=" flex items-center space-x-6">
            <button type="button">
              <UserRound size={20} />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative"
              type="button"
            >
              <ShoppingCart size={20} />
              {cart.length != 0 ? (
                <span className="absolute top-[-9px] right-[-9px] h-5 w-5 text-xs bg-blue-500 text-white flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="align-middle md:hidden"
            >
              {isMenuOpen ? <X /> : <AlignJustify />}
            </button>
          </div>
          {/* MENU BAR */}
          {isMenuOpen ? (
            <div className="absolute z-10 bg-white right-0 top-8 rounded-lg p-3 space-y-3 w-28 shadow-2xl md:hidden">
              <div>
                <Link to="/products/men">Men</Link>
              </div>
              <div>
                <Link to="/products/women">Women</Link>
              </div>
              <div>
                <Link to="/products/kids">Kids</Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {isCartOpen ? <Cart onClose={() => setIsCartOpen(false)} /> : null}
    </nav>
  );
}

export default Navbar;
