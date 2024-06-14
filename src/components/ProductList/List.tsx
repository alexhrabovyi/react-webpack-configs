import { Link } from 'react-router-dom';
import type { Product, ProductShort } from '../../utils/productListAPI';

interface ProductListProps {
  products: Product[] | ProductShort[],
}

export default function ProductList({ products }: ProductListProps) {
  const productList = products.map((p) => (
    <li key={p.id}>
      <Link to={p.id}>{p.name}</Link>
    </li>
  ));

  return (
    <ul>
      {productList}
    </ul>
  );
}
