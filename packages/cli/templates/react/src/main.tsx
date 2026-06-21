import '@cobalt/tokens/css';
import '@cobalt/tokens/css/fonts';
import '@cobalt/tokens/css/base';
import '@cobalt/tokens/themes/default';
import '@cobalt/components/pre-upgrade.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
