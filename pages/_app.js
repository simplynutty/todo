import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Averta-Regular";
    src: url("//db.onlinewebfonts.com/t/150037e11f159dca84bc4c04549094b6.eot");
    src: url("//db.onlinewebfonts.com/t/150037e11f159dca84bc4c04549094b6.eot?#iefix") format("embedded-opentype"),
         url("//db.onlinewebfonts.com/t/150037e11f159dca84bc4c04549094b6.woff2") format("woff2"),
         url("//db.onlinewebfonts.com/t/150037e11f159dca84bc4c04549094b6.woff") format("woff"),
         url("//db.onlinewebfonts.com/t/150037e11f159dca84bc4c04549094b6.ttf") format("truetype"),
         url("//db.onlinewebfonts.com/t/150037e11f159dca84bc4c04549094b6.svg#Averta-Regular") format("svg");
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  html {
    line-height: 1.15; /* 1 */
    -ms-text-size-adjust: 100%; /* 2 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  input {
    font-family: 'Averta-Regular', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 1.4;
    color: #262626;
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
      background-color: rgba(57,62,82,0.97);
    }

    100% {
      transform: scale(.3);
      background-color: rgb(255,255,255);
    }
  }
`

const theme = {
  colors: {
    complete: '#D6FDD0',
    inprogress: '#F3F3F3',
    overdue: '#F8CECD',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}