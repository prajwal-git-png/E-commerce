import React from 'react';
import { useCart } from '../context/CartContext';
export function OrderSummary() {
  const {
    cartItems,
    getTotalPrice
  } = useCart();
  const subtotal = getTotalPrice();
  const shipping = subtotal > 0 ? 5.99 : 0;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;
  return <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-medium mb-4">Order Summary</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      {cartItems.length > 0 && <div className="mt-4 space-y-2">
          <h4 className="font-medium text-sm text-gray-700">Items in Cart</h4>
          {cartItems.map(item => <div key={item.product.id} className="flex justify-between text-sm">
              <span>
                {item.product.name} x {item.quantity}
              </span>
              <span>${(item.product.price * item.quantity).toFixed(2)}</span>
            </div>)}
        </div>}
    </div>;
}