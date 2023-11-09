// import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-j8aw28kotl5k0n65.us.auth0.com"
    clientId="0Th5fJj2pUO297V90sJh5gCZrOJZnuSJ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);