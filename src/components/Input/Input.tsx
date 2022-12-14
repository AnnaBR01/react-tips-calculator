import React, { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
}

export const Input = ({ onChange, placeholder, name }: IProps) => {
  return (
    <StyledInput
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      type="number"
    />
  );
};
