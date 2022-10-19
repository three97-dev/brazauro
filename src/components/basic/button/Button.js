import React from "react";

import "./Button.css";

const Button = ({ link, onClick, children, buttonClasses, type, className }) => {
  return (
    <>
      {link ? (
        <a className={`w-full max-w-[253px] ${className}`} href={link}>
          <button
            onClick={onClick}
            type={type || "text"}
            className={`w-full text-[18px] leading-[22px] font-inter font-bold rounded-[10px] shadow ${buttonClasses}`}
          >
            {children}
          </button>
        </a>
      ) : (
        <button
          onClick={onClick}
          type={type || "text"}
          className={`w-full max-w-[253px] text-[18px] leading-[22px] font-inter font-bold rounded-[10px] shadow ${buttonClasses}`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
