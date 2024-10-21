import React from 'react';

interface ButtonProps {
  text?: string; 
  filled?: boolean; 
}

const Button: React.FC<ButtonProps> = ({ text = "Assine já!", filled = true }) => {
  const buttonClasses = filled 
    ? "bg-orange-500 text-white rounded-lg px-14 py-4 hover:bg-orange-600 transition duration-200"
    : "bg-white border border-orange-500 text-orange-500 rounded-lg px-14 py-4 hover:bg-orange-500 hover:text-white transition duration-200";

  return (
    <button className={buttonClasses}>
      {text}
    </button>
  );
}

export default Button;
