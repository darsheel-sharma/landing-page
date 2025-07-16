// main.jsx
import * as React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import theme from "./theme";

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error("Failed to find the root element")
}


ReactDOM.createRoot(rootElement as HTMLElement ).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
