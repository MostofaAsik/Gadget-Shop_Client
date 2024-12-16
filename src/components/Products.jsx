import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import { FaFilter } from 'react-icons/fa';
import Loader from './Loader';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('default');
    const [category, setCategory] = useState('All');
    const [brand, setBrand] = useState('All');
    const [totalPage, setTotalPage] = useState(null)
    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])

    // Example list of categories and brands for the dropdown
    // const categories = ['All', 'Electronics', 'Clothing', 'Furniture', 'Books', 'Toys'];
    // const brands = ['All', 'Samsung', 'Apple', 'Sony', 'LG', 'Nike', 'Adidas'];

    // 🛠️ Function to fetch products based on filters, sort, and search query
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const params = {
                title: searchQuery,
                sort: sortOption === 'price-low-to-high' ? 'asc' : 'desc',
                category: category !== 'All' ? category : '',
                brand: brand !== 'All' ? brand : ''
            };
            const response = await axios.get('http://localhost:5000/all-products', { params });

            setProducts(response.data.products);
            // console.log(response.data);
            setBrands(response.data.brands);
            setCategories(response.data.categories);
            setTotalPage(response.data.totalProduct);
        } catch (error) {
            console.error('Error fetching products:', error);
            setError('Failed to load products. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Call fetchProducts whenever the search, sort, category, or brand changes
    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            fetchProducts();
        }, 0); // Debounce API calls by 300ms

        // Clear previous timeout
        return () => clearTimeout(debounceTimer);
    }, [searchQuery, sortOption, category, brand]);

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    };

    const handleResetFilters = () => {
        setSearchQuery(''); // Reset search query
        setSortOption('default'); // Reset sort option to default
        setCategory('All'); // Reset category filter
        setBrand('All'); // Reset brand filter
    };

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <div className="container mx-auto p-4">
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-center">Our Products</h1>
            </header>

            {/* Search and Sort Bar */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <SearchBar setSearchQuery={setSearchQuery} />
                <select
                    value={sortOption}
                    onChange={handleSortChange}
                    className="mt-4 md:mt-0 p-2 border border-gray-300 rounded-lg shadow-sm"
                >
                    <option value="default">Sort By Price</option>
                    <option value="price-low-to-high">Price: Low to High</option>
                    <option value="price-high-to-low">Price: High to Low</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Filter Sidebar */}
                <aside className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                        <FaFilter className="mr-2" /> Filter
                    </h2>

                    {/* Category Dropdown */}
                    <label className="block mb-2 font-semibold">Category</label>
                    <select
                        value={category}
                        onChange={handleCategoryChange}
                        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                    >
                        <option value={''}>
                            Category
                        </option>
                        {categories?.map((categoryOption, index) => (
                            <option key={index} value={categoryOption}>
                                {categoryOption}
                            </option>
                        ))}
                    </select>

                    {/* Brand Dropdown */}
                    <label className="block mb-2 font-semibold">Brand</label>
                    <select
                        value={brand}
                        onChange={handleBrandChange}
                        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                    >
                        <option value={''}>
                            Brand
                        </option>
                        {brands?.map((brandOption, index) => (
                            <option key={index} value={brandOption}>
                                {brandOption}
                            </option>
                        ))}
                    </select>

                    {/* Reset Button */}
                    <button
                        onClick={handleResetFilters}
                        className="w-full bg-red-500 text-white font-bold py-2 rounded-lg mt-4 hover:bg-red-600 transition"
                    >
                        Reset Filters
                    </button>
                </aside>

                {/* Products Grid */}
                <section className="col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {loading && <Loader />}
                        {/* {products.length === 0 && <p className='text-red-600 text-3xl text-center'>No Product Found</p>} */}
                        {products.map(product => (
                            <div key={product._id} className="bg-white p-4 rounded-lg shadow-md">
                                <img
                                    src={product.imageURL}
                                    alt={product.title}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{product.title}</h3>
                                    <p className="text-gray-800 font-bold">${product.price}</p>
                                    <button className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg mt-4">
                                        Add WishList
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Products;
