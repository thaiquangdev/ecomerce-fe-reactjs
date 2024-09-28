import React from "react";

interface ButtonProps {
  title: string;
  classN: string;
  onCl?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ title, classN, onCl }) => {
  return (
    <button className={classN} onClick={onCl}>
      {title}
    </button>
  );
};

export default Button;
