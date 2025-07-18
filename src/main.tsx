import React from 'react';
import { createRoot } from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';

// 1) YOUR THEME (from public/)


// 2) PrimeReact core
import 'primereact/resources/primereact.min.css';

// 3) Icons & utilities
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// your global overrides
import './index.css';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>
);
