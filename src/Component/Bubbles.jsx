import React from "react";

const Bubbles = () => {
  return (
    <div className="bubbles">
      {[...Array(10)].map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  );
};

export default Bubbles;

