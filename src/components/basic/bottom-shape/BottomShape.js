import React from "react";

const BottomShape = ({ className }) => {
  return (
    <>
      <div className={`w-full md:hidden ${className}`}>
        <svg
          className="w-full"
          viewBox="0 0 390 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M390 6.98169C369.636 20.8276 291.212 31.1428 197.573 31.1428C88.7574 31.1428 0.488156 17.2129 0.00201773 0H0V100H390V6.98169Z"
            fill="#9E8470"
          />
        </svg>
      </div>

      <svg
        className={`w-full hidden md:block ${className}`}
        viewBox="0 0 1439 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.0074501 0H0V100H1440V6.9817C1364.81 20.8276 1075.24 31.1428 729.5 31.1428C327.72 31.1428 1.80242 17.2129 0.0074501 0Z"
          fill="#9E8470"
        />
      </svg>
    </>
  );
};

export default BottomShape;
