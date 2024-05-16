import React, { useEffect, useRef, useState } from "react";
//ICONS
import { AlignJustify } from "lucide-react";
import { UserRound } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { X } from "lucide-react";
//REDUX
import { useSelector } from "react-redux";

//
import { Link, useLocation } from "react-router-dom";
import Cart from "../Cart/Cart";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const menuNode = useRef(null);
  const cart = useSelector((state) => state.products);
  const location = useLocation();

  const handleOpenCart = () => {
    setIsCartOpen(true);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handler = (event) => {
      if (!menuNode.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mouseup", handler);
    }
    return () => document.removeEventListener("mouseup", handler);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location]);

  return (
    <nav className="font-poppins h-[50px] px-3 py-2 sm:px-5 md:px-6">
      <div className="flex max-w-[1300px] items-center justify-between lg:mx-auto">
        {/* LEFT BAR */}
        <div className="hidden md:block w-48">
          <div className="flex items-center justify-between space-x-5">
            <div>
              <Link
                className={
                  location.pathname == "/"
                    ? "font-bold text-blue-600"
                    : "hover:font-bold"
                }
                to="/"
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                className={
                  location.pathname == "/products/men"
                    ? "font-bold text-blue-600"
                    : "hover:font-bold"
                }
                to="/products/men"
              >
                Men
              </Link>
            </div>
            <div>
              <Link
                className={
                  location.pathname == "/products/women"
                    ? "font-bold text-blue-600"
                    : "hover:font-bold"
                }
                to="/products/women"
              >
                Women
              </Link>
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
          <div className=" flex items-center justify-end space-x-6 md:w-48">
            <button onClick={handleOpenCart} className="relative" type="button">
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
            <div
              ref={menuNode}
              className="absolute z-10 bg-white right-0 top-8 rounded-lg p-3 space-y-3 w-28 shadow-2xl md:hidden"
            >
              <div>
                <Link to="/">Home</Link>
              </div>
              <div>
                <Link to="/products/men">Men</Link>
              </div>
              <div>
                <Link to="/products/women">Women</Link>
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
