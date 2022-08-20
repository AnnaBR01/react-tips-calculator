import { Color } from "../../ui/colors";

export const customStyles = {
  control: (stylesReactSelect: any) => ({
    ...stylesReactSelect,
    paddingBlock: 15,
    borderRadius: 30,
    borderColor: Color.White,
  }),

  singleValue: (stylesReactSelect: any) => ({
    ...stylesReactSelect,
    fontWeight: 400,
    fontSize: 18,
  }),

  indicatorSeparator: (stylesReactSelect: any) => ({
    ...stylesReactSelect,
    backgroundColor: Color.White,
  }),
};
