import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { placeCardsMock } from './mock/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App cards={placeCardsMock} />
  </React.StrictMode>
);
