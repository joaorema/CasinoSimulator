import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        px-10 py-5 
        bg-red-400 
        hover:bg-indigo-700 
        text-white 
        font-semibold 
        rounded-xl 
        shadow-md 
        transition 
        duration-300 
        ease-in-out 
        hover:scale-105 
        active:scale-95
      "
    >
      {label}
    </button>
  );
};

export default Button;
