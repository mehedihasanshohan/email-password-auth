import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/root';
import Home from './components/Home/home';
import Login from './components/Login/login';
import Register from './components/Register/register';
import Header from './components/Header/header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
       path: '/',
       element : <Home></Home>,
      },
      {
        path: '/login',
        element : <Login></Login>,
      },
      {
        path: '/register',
        element : <Register></Register>,
      },
      {
        path: '/header',
        element : <Header></Header>,
      },
     ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
