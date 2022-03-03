import { createGlobalStyle } from "styled-components";

export const theme = {
  accentColor: "orange",
};

export default createGlobalStyle`
  *,
  *:before,
  *:after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      scroll-behavior: smooth;
  }
  ul {
  list-style: none;
  padding: 0;
}
`;
