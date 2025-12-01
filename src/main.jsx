import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BrandProducts from './pages/BrandProducts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/brand/:brand',
    element: <BrandProducts />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
