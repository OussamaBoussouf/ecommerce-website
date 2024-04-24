import React from "react";
import { Link } from "react-router-dom";

export function ButtonLink({children}) {
    return (
       <Link to="/products/1">
         <button type="button" className="text-sm md:text-lg  bg-white transition-colors duration-700 ease-in-out hover:bg-black hover:text-white font-poppins-bold px-10 py-3">
            {children}
        </button>
       </Link>
    );
}

;