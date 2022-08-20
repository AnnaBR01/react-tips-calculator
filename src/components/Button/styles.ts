import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledButton = styled.button<{ disabled: boolean }>`
  background: ${Color.BrightTurquoise};
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  border: none;
  padding-block: 13px;
  color: ${Color.White};
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
`;

export { StyledButton };
