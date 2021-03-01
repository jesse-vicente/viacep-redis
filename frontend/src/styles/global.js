import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    color: #3a3a3a;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: #f1f4f8;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
