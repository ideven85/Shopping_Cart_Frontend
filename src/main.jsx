import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import './assets/vendor/bootstrap/dist/css/bootstrap.min.css';
// import './assets/vendor/bootstrap-icons/font/bootstrap-icons.css';
// import './assets/vendor/swiper/swiper-bundle.min.css';
// import './assets/css/theme.min.css';
import 'material-dashboard/assets/css/material-dashboard.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
 
import {BrowserRouter} from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
