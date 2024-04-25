import React from "react";
import { Link } from "react-router-dom";

export function ButtonLink({children, className, path}) {
    return (
       <Link to={path}>
         <button type="button" className={className}>
            {children}
        </button>
       </Link>
    );
}

;