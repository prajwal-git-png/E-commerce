import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from 'lucide-react';
export function OrderConfirmationPage() {
  // Generate a random order number
  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  return <div className="max-w-2xl mx-auto text-center py-12">
      <div className="flex justify-center">
        <CheckCircleIcon className="h-16 w-16 text-green-500" />
      </div>
      <h1 className="mt-4 text-3xl font-bold text-gray-800">
        Order Confirmed!
      </h1>
      <p className="mt-2 text-lg text-gray-600">
        Thank you for your purchase. Your order has been received and is being
        processed.
      </p>
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-medium">Order Details</h2>
        <div className="mt-4">
          <p className="text-gray-700">
            <span className="font-medium">Order Number:</span> #{orderNumber}
          </p>
          <p className="mt-2 text-gray-700">
            <span className="font-medium">Estimated Delivery:</span>{' '}
            {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Link to="/" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Continue Shopping
        </Link>
      </div>
    </div>;
}