/* eslint-disable no-promise-executor-return */
export interface Product {
  id: string,
  name: string,
  price: string,
  desc: string,
}

export interface ProductShort {
  id: string,
  name: string,
}

let products: Product[] = [
  {
    id: '1',
    name: 'Samsung Galaxy',
    price: '1000',
    desc: 'Gnusmas is very good',
  },
  {
    id: '2',
    name: 'Apple Iphone',
    price: '2500',
    desc: 'Certified hood classic',
  },
  {
    id: '3',
    name: 'Poco',
    price: '200',
    desc: 'High quality frag granate',
  },
];

export async function getProducts() {
  await new Promise((res) => setTimeout(res, 1000));

  const productList = products.map((p): ProductShort => ({ id: p.id, name: p.name }));

  return productList;
}

export async function getProduct(id: string) {
  await new Promise((res) => setTimeout(res, 1000));

  const product = products.find((p) => p.id === String(id));
  return product;
}

export async function deleteProduct(id: string) {
  await new Promise((res) => setTimeout(res, 1000));

  products = products.filter((p) => p.id !== id);
}
