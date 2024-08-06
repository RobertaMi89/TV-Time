import React from "react";

function Banner({ children, className }) {
  return (
    <div className={className}>
      <h1>{children}</h1>
      <span></span>
    </div>
  );
}

export default Banner;
