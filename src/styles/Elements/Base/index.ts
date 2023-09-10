import { createGlobalStyle } from "styled-components";
import { ThemeProps } from "../../styles";

export interface GlobalThemeProps  {
  theme: ThemeProps;
}

const Base = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
  }
`;

export default Base;