import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem('access-token');
                const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/products`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setProducts(res.data);
            } catch (error) {
                setError('Failed to load products. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">My Products</h2>

            {products.length === 0 ? (
                <p className='text-red-600'>You have not added any products yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                        <div key={product._id} className="bg-white p-4 rounded-lg shadow-md">
                            <img
                                src={product.imageURL}
                                alt={product.title}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{product.title}</h3>
                                <p className="text-gray-600 mb-2">{product.brand}</p>
                                <p className="text-gray-800 font-bold">${product.price}</p>
                                <p className="text-sm text-gray-500 mt-2">{product.description}</p>
                                <p className="text-sm text-blue-500 mt-2">Category: {product.category}</p>
                                <p className="text-sm text-green-500 mt-2">Stock: {product.stock}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyProducts;
