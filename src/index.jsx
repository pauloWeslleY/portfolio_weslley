import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { App } from './App'
import { themes } from './themes/themes'
import './scss/global.scss'

const element = document.getElementById('root')

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <ChakraProvider theme={themes}>
      <ColorModeScript initialColorMode={themes.configThemeMode.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
