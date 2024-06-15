import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router-dom';

import {
  Await, defer, redirect, useLoaderData,
} from 'react-router-dom';
import { Suspense } from 'react';
import { Product, deleteProduct, getProduct } from '../../utils/productListAPI';
import ProductProfile from '../../components/ProductProfile/Profile';

export async function loader({ params }: LoaderFunctionArgs) {
  const { productId } = params;

  const product = getProduct(productId as string);
  return defer({ product });
}

export async function action({ params }: ActionFunctionArgs) {
  const { productId } = params;

  deleteProduct(productId as string);

  return redirect('../');
}

export function ProductProfilePage() {
  const { product } = useLoaderData() as { product: Product };

  const fallback = <p>loading ...</p>;

  return (
    <Suspense fallback={fallback}>
      <Await
        resolve={product}
      >
        <ProductProfile />
      </Await>
    </Suspense>
  );
}
