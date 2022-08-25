import React, { FormEvent, useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { Button } from "../Button/Button";
import { CustomSelect, options } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { StyledForm, SubTitle, Title, Total } from "./styles";

export const Form = () => {
  const bill = useInput();
  const persons = useInput();
  const [tips, setTips] = useState<number>(options[0].value);
  const [total, setTotal] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const result = (+bill.value * (1 + tips / 100)) / +persons.value;
    setTotal(result);
  };

  useEffect(() => {
    if (bill.value && persons.value) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [bill.value, persons.value]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <SubTitle>Let’s go calculate your tips</SubTitle>
      <Input {...bill} placeholder="Enter bill" name="bill" />
      <Input {...persons} placeholder="Enter  persons" name="persons" />
      <CustomSelect onChange={setTips} tips={tips} />
      <Total>Total: {total.toFixed(2)}$</Total>
      <Button isDisabled={isDisabled}></Button>
    </StyledForm>
  );
};
