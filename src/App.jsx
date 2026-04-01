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


      {/* --- Hero Section --- */}
<header className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10">
  <div className="md:w-1/2">
    <div className="bg-[#F5F3FF] text-[#7C3AED] px-4 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-2 mb-6">
      <span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-ping"></span>
      New: AI-Powered Tools Available
    </div>
    <h2 className="text-5xl md:text-6xl font-black leading-[1.1] mb-6 text-[#1E293B]">
      Supercharge Your Digital Workflow
    </h2>
    <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-md">
      Access premium AI tools, design assets, templates, and productivity software—all in one place.
    </p>
    <div className="flex flex-wrap gap-4">
      {/* Explore Products Button - Full Rounded */}
      <button className="bg-[#7C3AED] text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-purple-100 hover:-translate-y-1 transition-all">
        Explore Products
      </button>
      {/* Watch Demo Button - Full Rounded */}
      <button className="border-2 border-gray-100 text-gray-700 px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-gray-50 transition-all">
        <img src={playIcon} alt="play" className="w-5" /> Watch Demo
      </button>
    </div>
  </div>
  <div className="md:w-1/2">
    <img src={bannerImg} alt="Banner" className="w-full rounded-[40px] shadow-2xl" />
  </div>
</header>

