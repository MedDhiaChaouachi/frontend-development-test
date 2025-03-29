import React from "react";

interface ButtonProps {
  icon?: React.ReactNode;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  isActive = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      className={`flex items-center gap-3 p-3 rounded-lg w-full transition-colors ${
        isActive
          ? "bg-blue-500 text-white"
          : "hover:bg-gray-100 dark:hover:bg-gray-700"
      } ${className}`}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span className="font-medium">{text}</span>
    </button>
  );
};

export default Button;
