import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import reactDom from 'react-dom';
import App from './App';
//import "./index.css";


reactDom.render(<>
    {/* <BrowserRouter>
        <App />
    </BrowserRouter> */}
    <App />
    </>
    , document.getElementById('root'));

