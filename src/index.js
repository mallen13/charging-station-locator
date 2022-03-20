import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
