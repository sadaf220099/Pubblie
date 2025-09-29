import React from "react";
const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
    >
      {children}
    </button>
  );
};

export default Button;
