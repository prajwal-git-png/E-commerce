import React from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
export function ProductsPage() {
  return <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>;
}