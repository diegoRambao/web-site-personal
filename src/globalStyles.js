import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   body {
   margin: 0;
   padding: 0;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   font-size: calc(12px + 0.4vw);
   background-color: ${(props) => (props.theme ? '#262626' : '#fff')}
}

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    .container {
      max-width: 80%;
      margin: 0 auto;
    }

    .absolute {
      position: absolute;
    }

    .relative {
      position: relative;
    }

    .text-center {
      text-align: center;
    }
 
`

export default GlobalStyle
