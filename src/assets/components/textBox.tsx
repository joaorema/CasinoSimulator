import React from "react";

interface TextBoxProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
}

const TextBox: React.FC<TextBoxProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="px-4 py-2 rounded-lg bg-black/30 border border-white/40 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
    />
  );
};

export default TextBox;


