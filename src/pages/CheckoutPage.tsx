import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckoutForm } from '../components/CheckoutForm';
import { OrderSummary } from '../components/OrderSummary';
export function CheckoutPage() {
  const {
    cartItems
  } = useCart();
  if (cartItems.length === 0) {
    return <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
        <p className="text-gray-600 mt-2">
          Add some products to your cart before checking out.
        </p>
        <Link to="/" className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Shop Now
        </Link>
      </div>;
  }
  return <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CheckoutForm />
        </div>
        <div>
          <OrderSummary />
          <div className="mt-4">
            <Link to="/cart" className="text-indigo-600 hover:text-indigo-800 flex items-center">
              ← Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>;
}