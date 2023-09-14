import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";
import Products from './pages/products.jsx';
import store from './store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowerRouter> 
    <Provider store={store}>
    <App/>
    </Provider>
    </BrowerRouter>
  </React.StrictMode>,
)
