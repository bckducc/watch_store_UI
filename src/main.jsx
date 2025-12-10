import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BrandProducts from './pages/BrandProducts';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Trend from './pages/Trend';
import Men from './pages/Men';
import Women from './pages/Women';
import Accessories from './pages/Accessories';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/products',
    element: <ProductList />,
  },
  {
    path: '/product/:id',
    element: <ProductDetail />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/trend',
    element: <Trend />,
  },
  {
    path: '/men',
    element: <Men />,
  },
  {
    path: '/women',
    element: <Women />,
  },
  {
    path: '/accessories',
    element: <Accessories />,
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
