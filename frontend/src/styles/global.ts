import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
header, body, p, footer, section, article, aside, h3 {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-family: Questrial, Roboto, sans-serif;
  background-position: top center;
  background:${({ theme }) => theme.colors.backgroundLighterColor};
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

*,
*::before,
*::after,
::before,
::after {
  box-sizing: border-box;
}
`;

export default GlobalStyle;
