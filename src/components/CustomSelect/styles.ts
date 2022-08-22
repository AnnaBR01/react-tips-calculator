import { StylesConfig } from "react-select";
import { IOption } from "../../types";
import { Color } from "../../ui/colors";

export const customStyles: StylesConfig<IOption> = {
  control: (stylesReactSelect) => ({
    ...stylesReactSelect,
    textAlign: "center",
    paddingLeft: 30,
    paddingBlock: 15,
    borderRadius: 30,
    borderColor: Color.White,
  }),

  singleValue: (stylesReactSelect) => ({
    ...stylesReactSelect,
    fontWeight: 400,
    fontSize: 18,
  }),

  indicatorSeparator: (stylesReactSelect) => ({
    ...stylesReactSelect,
    backgroundColor: Color.White,
  }),
};
