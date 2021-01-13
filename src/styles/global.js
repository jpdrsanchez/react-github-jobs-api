import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${normalize};
  ${reset};

  :root {
    /* Colors */
    --violet: #5964e0;
    --light-violet: #939bf4;
    --white: #fff;
    --bodyBg: #f4f6f8;
    --elementBg: #fff;
    --placeholderColor: rgb(25, 32, 45, .5);
    --text-first: #19202d;
    --text-second: #6e8098;
    --checkboxColor: rgba(25, 32, 45, .1);
    --borderColor: rgba(110, 128, 152, .2);
    --skeleton: #9daec2;
    --secondButton: rgba(89,100,224, .1);
    --secondButtonHover: rgba(89,100,224, .35);
    --secondButtonColor: #5964e0;

    /* Typography */
    --main-typo: 'Kumbh Sans', sans-serif;
  }

  .dark-mode:root {
    --bodyBg: #121721;
    --elementBg: #19202d;
    --placeholderColor: rgba(255, 255, 255, .5);
    --text-first: #fff;
    --checkboxColor: rgba(255, 255, 255, .1);
    --skeleton: #f4f6f8;
    --secondButton: rgba(255, 255, 225, .1);
    --secondButtonHover: rgba(255, 255, 225, .35);
    --secondButtonColor: #fff;
  } 

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    background-color: var(--bodyBg);
    font-family: var(--main-typo);
    font-weight: 400;
  }

`;

export default GlobalStyle;
