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
         bg-linear-to-br from-indigo-600 via-blue-500 to-cyan-400
        hover:from-indigo-500 hover:via-blue-400 hover:to-cyan-300 
        text-white 
        font-semibold 
        rounded-xl 
        shadow-[0_0_15px_rgba(0,255,255,0.3)] 
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
