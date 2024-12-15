import React from "react";

interface LoaderProps {
  size?: number; 
  color?: string; 
}

const Loader: React.FC<LoaderProps> = ({ size = 40, color = "text-blue-500" }) => {
  return (
    <div className="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`animate-spin ${color}`}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
        ></circle>
        <path
          className="opacity-75"
          d="M12 2a10 10 0 0110 10h-4a6 6 0 00-6-6V2z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
};

export default Loader;
