import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
interface ProductCardProps {
  product: Product;
}
export function ProductCard({
  product
}: ProductCardProps) {
  return <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link to={`/product/${product.id}`}>
        <div className="h-64 overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="text-indigo-600 font-bold mt-1">
            ${product.price.toFixed(2)}
          </p>
          <div className="mt-2">
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
              {product.category}
            </span>
          </div>
        </div>
      </Link>
    </div>;
}