import React from "react";

interface ButtonProps {
  title: string;
  classN: string;
}

const Button: React.FC<ButtonProps> = ({ title, classN }) => {
  return <button className={classN}>{title}</button>;
};

export default Button;
