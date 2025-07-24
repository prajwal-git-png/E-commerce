import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCartIcon } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
export function ProductDetailsPage() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const {
    addToCart
  } = useCart();
  const [quantity, setQuantity] = useState(1);
  const product = products.find(p => p.id === Number(id));
  if (!product) {
    return <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
        <button onClick={() => navigate('/')} className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Return to Products
        </button>
      </div>;
  }
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };
  return <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-2xl font-bold text-indigo-600">
            ${product.price.toFixed(2)}
          </p>
          <div className="border-t border-b py-4">
            <p className="text-gray-700">{product.description}</p>
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="quantity" className="text-gray-700">
              Quantity:
            </label>
            <select id="quantity" value={quantity} onChange={handleQuantityChange} className="border rounded-md p-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => <option key={num} value={num}>
                  {num}
                </option>)}
            </select>
          </div>
          <button onClick={handleAddToCart} className="w-full md:w-auto flex items-center justify-center space-x-2 bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors">
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
          <div className="mt-6">
            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              Category: {product.category}
            </span>
          </div>
        </div>
      </div>
    </div>;
}