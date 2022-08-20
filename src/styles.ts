import styled from "styled-components";
import { Color } from "./ui/colors";
import circles from "./assets/circles.svg";
import { Media } from "./ui/media";

const StyledApp = styled.div`
  background: no-repeat url(${circles}) ${Color.LightGrey};
  max-width: 1512px;
  padding: 203px 0 138px;
  margin: 0 auto;
  display: grid;
  justify-items: center;

  ${Media.MD} {
    padding: 236px 0 316px;
  }

  ${Media.SM} {
    padding: 241px 0 91px;
  }
`;

export { StyledApp };
