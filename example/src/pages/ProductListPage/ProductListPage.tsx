/* eslint-disable react/no-children-prop */
import {
  Outlet, defer, useLoaderData, Await,
} from 'react-router-dom';

import { Suspense } from 'react';
import ProductList from '../../components/ProductList/List';
import { getProducts, type ProductShort } from '../../utils/productListAPI';

export async function loader() {
  const products = getProducts();

  return defer({ products });
}

export function ProductListPage() {
  const { products } = useLoaderData() as { products: ProductShort[] };

  const fallback = <p>loading ...</p>;

  return (
    <Suspense fallback={fallback}>
      <Await
        resolve={products}
        children={(resProducts) => (
          <ProductList products={resProducts} />
        )}
      />
      <Outlet />
    </Suspense>
  );
}
