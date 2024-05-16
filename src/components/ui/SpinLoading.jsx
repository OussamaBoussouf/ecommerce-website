import React from "react";

function SpinLoading() {
  return (
    <div className="flex justify-center pt-16">
      <div className="h-14 w-14 border-[6px] animate-spin rounded-full border-r-blue-600"></div>
    </div>
  );
}

export default SpinLoading;
