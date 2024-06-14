import { useAsyncValue, useFetcher } from 'react-router-dom';
import Button from '../common/Button/Button';
import type { Product } from '../../utils/productListAPI';

interface ProductProfileProps {
  product: Product,
}

export default function ProductProfile() {
  const fetcher = useFetcher();
  const { product } = useAsyncValue() as ProductProfileProps;

  return (
    <>
      <hr />
      <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <p>{product.desc}</p>
        <Button handleClick={() => {
          fetcher.submit({}, { method: 'post' });
        }}
        >
          delete
        </Button>
      </div>
    </>
  );
}
