import Select, { SingleValue } from "react-select";
import { IOption } from "../../types";
import { customStyles } from "./styles";

interface IProps {
  onChange: (tips: number) => void;
  tips: number;
}

export const options: IOption[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

export const CustomSelect = ({ onChange, tips }: IProps) => {
  const handleChange = (option: SingleValue<IOption>) => {
    if (option) onChange(option.value);
  };

  const getTips = () =>
    options.find((option) => {
      return option.value === tips;
    });

  return (
    <Select
      options={options}
      styles={customStyles}
      onChange={handleChange}
      value={getTips()}
    />
  );
};
