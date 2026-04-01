import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Hero এবং অন্যান্য Static Assets
import bannerImg from './assets/banner.png';
import playIcon from './assets/Play.png';
import userIcon from './assets/user.png';
import packageIcon from './assets/package.png';
import rocketIcon from './assets/rocket.png';


const App = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      toast.warning("Already in cart!");
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Removed from cart");
  };

  const handleCheckout = () => {
    setCart([]);
    toast.info("Checkout successful! Cart cleared.");
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
   
  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <ToastContainer position="bottom-right" />

      {/* --- Navbar --- */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-6 border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <h1 className="text-2xl font-black text-[#7C3AED]">DigiTools</h1>
        <div className="hidden md:flex gap-8 font-semibold text-gray-500">
          <a href="#" className="hover:text-[#7C3AED]">Products</a>
          <a href="#" className="hover:text-[#7C3AED]">Features</a>
          <a href="#" className="hover:text-[#7C3AED]">Pricing</a>
          <a href="#" className="hover:text-[#7C3AED]">Testimonials</a>
          <a href="#" className="hover:text-[#7C3AED]">FAQ</a>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative cursor-pointer" onClick={() => setActiveTab('cart')}>
            <span className="text-xl">🛒</span>
            <span className="absolute -top-2 -right-2 bg-[#7C3AED] text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center border-2 border-white font-bold">
              {cart.length}
            </span>
          </div>
          <a href="#" className="hover:text-[#7C3AED]">Login</a>
          <button className="bg-[#7C3AED] text-white px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:bg-[#6D28D9] transition">
            Get Started
          </button>
          
        </div>
      </nav>

