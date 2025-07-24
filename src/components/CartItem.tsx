import React from 'react';
import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
interface CartItemProps {
  product: Product;
  quantity: number;
}
export function CartItem({
  product,
  quantity
}: CartItemProps) {
  const {
    updateQuantity,
    removeFromCart
  } = useCart();
  return <div className="flex items-center py-4 border-b">
      <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="ml-4 flex-1">
        <h3 className="text-base font-medium text-gray-800">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">
          ${product.price.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center">
        <div className="flex border rounded-md">
          <button onClick={() => updateQuantity(product.id, quantity - 1)} className="p-2 text-gray-600 hover:text-indigo-600">
            <MinusIcon className="h-4 w-4" />
          </button>
          <span className="px-4 py-2">{quantity}</span>
          <button onClick={() => updateQuantity(product.id, quantity + 1)} className="p-2 text-gray-600 hover:text-indigo-600">
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>
        <button onClick={() => removeFromCart(product.id)} className="ml-4 text-red-500 hover:text-red-700">
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>;
}