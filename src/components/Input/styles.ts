import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledInput = styled.input`
  text-align: center;
  padding-block: 21px;
  border-radius: 30px;
  border: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: ${Color.Grey};
  &&::-webkit-outer-spin-button,
  &&::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

export { StyledInput };
