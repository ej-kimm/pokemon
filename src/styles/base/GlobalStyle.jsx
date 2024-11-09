import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --beige: #f1dec6;
    --background: #f3f3e0;
    --white: #fff;

    --blue: #133e87;
    --blue-light: #CBDCEB;
    --blue-dark: #113066;

    --pink: #f86d7d;
    --pink-dark: #ec5668;
  }

  * {
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  html {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: var(--background);
  }

  h1 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    background-color: transparent;
    border: 0;
  }

  button:focus,
  button:active,
  input:focus,
  input:active,
  select:focus,
  select:active,
  textarea:focus,
  textarea:active {
    outline: none;
    box-shadow: none;
  }

  a,
  button {
    cursor: pointer;
  }

  button {
    padding: 0;
  }

  ul,
  ol,
  li {
    padding-left: 0;
    list-style: none;
  }

  address {
    font-style: normal;
  }
`
