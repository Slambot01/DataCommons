import React from "react";
import "./Button.css";

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  icon: Icon,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button button-${variant} ${className}`}
    >
      {Icon && <Icon className="button-icon" />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
