import React, { useState } from "react";
//ICONS
import { AlignJustify } from "lucide-react";
import { UserRound } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { X } from "lucide-react";
//
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <Link to="/" className="text-2xl font-poppins-bold">LATITUDE</Link>
        </div>
        {/* RIGHT BAR */}
        <div className="relative">
          <div className=" flex items-center space-x-6">
            <button type="button">
              <UserRound size={20} />
            </button>
            <button type="button">
              <ShoppingCart size={20} />
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
                <Link to="/products/1">Men</Link>
              </div>
              <div>
                <Link to="/products/2">Women</Link>
              </div>
              <div>
                <Link to="/products/3">Kids</Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
