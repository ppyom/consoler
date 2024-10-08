import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx';
import HomePage from './pages/Home/HomePage.tsx';
import EditPage from './pages/EditPage/EditPage.tsx';
import ListPage from './pages/ListPage/ListPage.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/edit', element: <EditPage /> },
      { path: '/edit/:id', element: <EditPage /> },
      { path: '/list', element: <ListPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
