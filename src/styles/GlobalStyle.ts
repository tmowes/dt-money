import { shade, tint } from 'polished'
import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${({ theme: { colors } }) => css`
  :root {
    --background: #2B2735;
    --shape: #3C3847;
    --text-title: #F0F2F5;
    --text-body: #F0F2F5CC;
    --inputs: #211E29;
    --red: #E52E4D;
    --green: #33CC95;
    --blue: #5429CC;
    --blue-light: #6933FF;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:0;
  }
  html {
    font-size: 100%;
    height: 100%;
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${colors.background};
    color: ${colors.textTitle};
  }
  body {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100vh;
  }
  body,
  input,
  textarea,
  button {
    font: 400 1.6rem 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1.25;
    border: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }
  a {
    text-decoration: none;
    background: none;
    font-weight: 600;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
    color: inherit;
    color: ${colors.orange};
    :hover {
      color: ${tint(0.16, colors.orange)};
      text-decoration: underline;
    }
    :active {
      color: ${shade(0.16, colors.orange)};
      text-decoration: underline;
    }
  }
  button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
`}
`
