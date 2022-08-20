import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

const StyledForm = styled.form`
  text-align: center;
  display: grid;
  align-items: start;
  gap: 45px;
  max-width: 459px;
`;

const Title = styled.h2`
  font-size: 40px;
  line-height: 58px;
  font-weight: 400;

  ${Media.MD} {
    font-size: 24px;
    line-height: 35px;
  }
`;

const SubTitle = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  line-height: 38px;
  font-weight: 400;
  color: ${Color.DarkGrey};

  ${Media.MD} {
    font-size: 24px;
    line-height: 28px;
  }
`;

const Total = styled.p`
  justify-self: start;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;

  ${Media.SM} {
    font-size: 18px;
    line-height: 26px;
  }
`;
export { StyledForm, Title, SubTitle, Total };
