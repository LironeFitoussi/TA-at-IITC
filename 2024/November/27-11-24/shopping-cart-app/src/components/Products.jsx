const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Headphones', price: 100 },
];

import ProductItem from './ProductItem.jsx';

const Products = () => {
    return (
        <div>
            <h2>Products List</h2>
            {products.map((item) => (
                <ProductItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default Products