import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeContextProvider } from "./themeContext";

import './index.css';
import App from './App';
import 'materialize-css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(


<ThemeContextProvider>
    <App />
</ThemeContextProvider>, document.getElementById('root')

);

serviceWorker.unregister();
