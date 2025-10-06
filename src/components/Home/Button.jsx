import React from "react";
const Button = ({ children, onClick, className, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className=    {`bg-blue-600 text-white px-6 py-2 rounded-2xl hover:bg-blue-700 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
