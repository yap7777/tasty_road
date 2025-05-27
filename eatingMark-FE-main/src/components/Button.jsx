import React from 'react';

const Button = ({ children, types = 'colorLight', onClick }) => {
  const baseClasses = "px-4 py-2 rounded text-sm cursor-pointer transition-all duration-200 ease-in-out hover:opacity-90 active:scale-98";
  
  const typeClasses = {
    colorLight: "bg-[#F2EFE8] text-gray-800",
    outlineLight: "bg-transparent border border-[#F2EFE8] text-[#F2EFE8]",
    outlineDark: "bg-transparent border border-[#817D73] text-[#817D73]",
    colorDark: "bg-[#817D73] text-[#F2EFE8]"
  };

  return (
    <button 
      className={`${baseClasses} ${typeClasses[types]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 