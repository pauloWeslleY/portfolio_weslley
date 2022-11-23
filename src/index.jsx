import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { themes } from './themes/themes';
import './scss/global.scss';

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

root.render(
	<React.StrictMode>
		<ChakraProvider theme={themes}>
			<ColorModeScript initialColorMode={themes.configThemeMode.initialColorMode} />
			<App />
		</ChakraProvider>
	</React.StrictMode>,
);
