import React from "react";

interface InputProps {
  type: string;
  place: string;
  classN: string;
  name?: string;
  val?: string | number;
  onCh?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  place,
  classN,
  name,
  val,
  onCh,
}) => {
  return (
    <input
      className={classN}
      type={type}
      placeholder={place}
      name={name}
      value={val}
      onChange={onCh}
    />
  );
};

export default Input;
