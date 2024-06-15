import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import UserProfilePage from '../pages/UserProfilePage/UserProfilePage';
import { loader as productListPageLoader, ProductListPage } from '../pages/ProductListPage/ProductListPage';
import {
  loader as productProfilePageLoader,
  ProductProfilePage,
  action as productProfileAction,
} from '../pages/ProductProfilePage/ProductProfilePage';
import './main.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserProfilePage />,
    children: [
      {
        path: 'products',
        element: <ProductListPage />,
        loader: productListPageLoader,
        children: [
          {
            path: ':productId',
            element: <ProductProfilePage />,
            loader: productProfilePageLoader,
            action: productProfileAction,
          },
        ],
      },
    ],
  },
]);

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
