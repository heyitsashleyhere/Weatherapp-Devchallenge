import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App';
import UserContextProvider from './components/context/userContext';
import './index.scss';


ReactDOMClient.createRoot(document.getElementById('root'))
        .render(
          <UserContextProvider>
             <App />
          </UserContextProvider>
        )