import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CartItem } from '../components/CartItem';
import { OrderSummary } from '../components/OrderSummary';
export function CartPage() {
  const {
    cartItems,
    getTotalPrice
  } = useCart();
  const navigate = useNavigate();
  if (cartItems.length === 0) {
    return <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
        <p className="text-gray-600 mt-2">
          Add some products to your cart to see them here.
        </p>
        <Link to="/" className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Continue Shopping
        </Link>
      </div>;
  }
  return <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            {cartItems.map(item => <CartItem key={item.product.id} product={item.product} quantity={item.quantity} />)}
          </div>
          <div className="mt-4">
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 flex items-center">
              ← Continue Shopping
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <OrderSummary />
          <button onClick={() => navigate('/checkout')} className="w-full bg-indigo-600 py-3 px-4 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>;
}