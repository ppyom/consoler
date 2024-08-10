import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx';
import HomePage from './pages/Home/HomePage.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
