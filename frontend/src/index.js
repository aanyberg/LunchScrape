import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import 'bulma/css/bulma.min.css';
import './assets/css/style.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
