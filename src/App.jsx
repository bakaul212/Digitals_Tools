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

 {/* --- Stats Section --- */}
      <section className="bg-[#7C3AED] py-16 mb-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-10 text-white text-center">
          <div><h3 className="text-5xl font-black mb-2">50K+</h3><p className="opacity-80 font-medium">Active Users</p></div>
          <div className="hidden md:block h-16 w-[1px] bg-white/20"></div>
          <div><h3 className="text-5xl font-black mb-2">200+</h3><p className="opacity-80 font-medium">Premium Tools</p></div>
          <div className="hidden md:block h-16 w-[1px] bg-white/20"></div>
          <div><h3 className="text-5xl font-black mb-2">4.9</h3><p className="opacity-80 font-medium">Rating</p></div>
        </div>
      </section>

  {/* --- Main Toggling Section --- */}
<section className="max-w-7xl mx-auto px-6 mb-32">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-black text-[#1E293B] mb-4">Premium Digital Tools</h2>
    <p className="text-gray-500 mb-8 max-w-lg mx-auto">Choose from our curated collection designed to boost your productivity.</p>
    
    <div className="inline-flex bg-gray-50 p-1.5 rounded-full border border-gray-200 shadow-sm">
      <button 
        onClick={() => setActiveTab('products')}
        className={`px-10 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'products' ? 'bg-[#7C3AED] text-white shadow-lg' : 'text-gray-500 hover:text-[#7C3AED]'}`}
      >Products</button>
      <button 
        onClick={() => setActiveTab('cart')}
        className={`px-10 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'cart' ? 'bg-[#7C3AED] text-white shadow-lg' : 'text-gray-500 hover:text-[#7C3AED]'}`}
      >Cart ({cart.length})</button>
    </div>
  </div>

  {activeTab === 'products' ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((p) => (
        <div key={p.id} className="bg-white border border-gray-100 rounded-[32px] p-8 hover:shadow-2xl transition-all group">
          <div className="flex justify-between items-start mb-6">
            <div className="bg-[#F5F3FF] p-4 rounded-2xl">
              {/* ✅ সঠিক ইমেজ পাথ সংশোধন */}
              <img 
                src={`/products/${p.icon}`} 
                alt={p.name} 
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
              p.tagType === 'popular' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'
            }`}>
              {p.tag}
            </span>
          </div>
          <h3 className="text-2xl font-black mb-3 text-slate-800">{p.name}</h3>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">{p.description}</p>
          <div className="text-3xl font-black mb-6 text-slate-900">
            ${p.price}<span className="text-sm text-gray-400 font-normal">/{p.period === 'Monthly' ? 'Mo' : 'One-Time'}</span>
          </div>
          <div className="space-y-3 mb-10">
            {p.features?.map(f => (
              <div key={f} className="flex items-center gap-3 text-sm font-semibold text-gray-600">
                <span className="text-[#10B981]">✓</span> {f}
              </div>
            ))}
          </div>
          <button 
            onClick={() => addToCart(p)}
            className={`w-full py-4 rounded-2xl font-black transition-all ${
              cart.find(item => item.id === p.id) ? 'bg-[#10B981] text-white shadow-lg shadow-green-100' : 'bg-[#7C3AED] text-white hover:bg-black shadow-lg shadow-purple-100'
            }`}
          >
            {cart.find(item => item.id === p.id) ? "✓ Added to Cart" : "Buy Now"}
          </button>
        </div>
      ))}
    </div>
  ) : (
    /* --- Cart Section --- */
    <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-[32px] shadow-2xl border border-gray-50">
      <h2 className="text-3xl font-black mb-10 text-slate-800">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center py-20">
            <p className="text-gray-400 font-bold text-xl">Your cart is empty!</p>
            <button onClick={() => setActiveTab('products')} className="mt-4 text-[#7C3AED] font-black hover:underline">Go to Products</button>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center bg-gray-50 p-5 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-5">
                {/* ✅ কার্টেও ইমেজ পাথটি সংশোধিত */}
                <img src={`/products/${item.icon}`} className="w-12 h-12 object-contain" alt={item.name} />
                <div>
                  <h4 className="font-extrabold text-lg text-slate-800">{item.name}</h4>
                  <p className="text-[#7C3AED] font-black">${item.price}</p>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 font-bold hover:text-red-700 transition">Remove</button>
            </div>
          ))}
          <div className="mt-12 pt-8 border-t-2 border-dashed border-gray-200 flex justify-between items-center">
            <span className="text-xl font-bold text-gray-400">Total:</span>
            <span className="text-4xl font-black text-[#1E293B]">${totalPrice}</span>
          </div>
          <button onClick={handleCheckout} className="w-full mt-10 bg-[#7C3AED] text-white py-5 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl shadow-purple-100">
            Proceed To Checkout
          </button>
        </div>
      )}
    </div>
  )}
</section>

