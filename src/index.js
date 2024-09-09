import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/integral/IntegralCF-Bold.otf';

import { Auth0Provider } from '@auth0/auth0-react';


const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-diawlmgp0gmfgjtb.us.auth0.com"
    clientId="qLMJNQh6W2senhcxp2UxLMg0qIo3Y3D5"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);