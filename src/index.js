import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { AppContext } from './contextProvider';

import LoginPage from './pages/LoginPage.js';
import LandingPage from './pages/LandingPage.js';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <App />
  }
]);

const state = {
  isLoggedIn: false,
  setIsLoggedIn: (value) => {state.isLoggedIn = value}
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext.Provider value={state}>
      <RouterProvider router={router} >
        <App />
      </RouterProvider>
    </AppContext.Provider>

  </React.StrictMode>
);
