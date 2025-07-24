export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}
export const products: Product[] = [{
  id: 1,
  name: 'Wireless Headphones',
  price: 129.99,
  description: 'Premium wireless headphones with noise cancellation technology and 30-hour battery life. Enjoy crystal clear sound and maximum comfort with memory foam ear cushions.',
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  category: 'Electronics'
}, {
  id: 2,
  name: 'Smart Watch',
  price: 199.99,
  description: 'Stay connected with this smart watch featuring heart rate monitoring, GPS, and a 5-day battery life. Water-resistant and compatible with iOS and Android devices.',
  image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  category: 'Electronics'
}, {
  id: 3,
  name: 'Leather Backpack',
  price: 79.99,
  description: 'Handcrafted genuine leather backpack with multiple compartments. Perfect for daily use or weekend trips. Features padded laptop sleeve and water-resistant design.',
  image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  category: 'Fashion'
}, {
  id: 4,
  name: 'Portable Bluetooth Speaker',
  price: 59.99,
  description: 'Compact and waterproof Bluetooth speaker with 360° sound and deep bass. Features 12-hour playtime and built-in microphone for calls.',
  image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  category: 'Electronics'
}, {
  id: 5,
  name: 'Stainless Steel Water Bottle',
  price: 24.99,
  description: 'Double-walled vacuum insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly.',
  image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  category: 'Home'
}, {
  id: 6,
  name: 'Organic Cotton T-Shirt',
  price: 29.99,
  description: 'Soft and breathable organic cotton t-shirt. Ethically made with eco-friendly dyes. Available in multiple colors.',
  image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  category: 'Fashion'
}, {
  id: 7,
  name: 'Wireless Charging Pad',
  price: 39.99,
  description: 'Fast wireless charging pad compatible with all Qi-enabled devices. Features LED indicator and anti-slip surface.',
  image: 'https://images.unsplash.com/photo-1622445275576-721325763afe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  category: 'Electronics'
}, {
  id: 8,
  name: 'Ceramic Coffee Mug',
  price: 19.99,
  description: 'Handcrafted ceramic coffee mug with unique glaze. Microwave and dishwasher safe. Holds 12oz of your favorite beverage.',
  image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  category: 'Home'
}];