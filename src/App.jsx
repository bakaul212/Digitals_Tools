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
    <p className="text-gray-500 mb-8 max-w-lg mx-auto">Choose from our curated collection of premium digital products designed
to boost your productivity and creativity.</p>
    
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

      {/* --- Steps Section --- */}
      <section className="bg-gray-50 py-24 mb-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-16 text-[#1E293B]">Get Started In 3 Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { img: userIcon, title: "Create Account", step: "01" },
              { img: packageIcon, title: "Choose Products", step: "02" },
              { img: rocketIcon, title: "Start Creating", step: "03" }
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[40px] shadow-sm relative group hover:shadow-xl transition-all">
                <span className="absolute top-8 right-8 bg-[#7C3AED] text-white text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full">
                  {s.step}
                </span>
                <div className="bg-[#F5F3FF] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition">
                  <img src={s.img} className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-black mb-4">{s.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Sign up for free in seconds and get your toolkit ready.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
   {/* --- Simple, Transparent Pricing Section --- */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#0F172A]">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 mb-16 font-medium">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Starter Plan */}
            <div className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
              <h4 className="text-2xl font-black mb-2 text-[#1E293B]">Starter</h4>
              <p className="text-gray-500 mb-6 font-medium">Perfect for getting started</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-[#1E293B]">$0</span>
                <span className="text-gray-400 font-bold">/Month</span>
              </div>
              <ul className="text-left space-y-4 mb-10 text-gray-600 font-medium">
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-green-500"></i> Access to 10 free tools</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-green-500"></i> Basic templates</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-green-500"></i> Community support</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-green-500"></i> 1 project per month</li>
              </ul>
              <button className="w-full py-4 rounded-full bg-[#7C3AED] text-white font-black hover:bg-[#6D28D9] transition shadow-lg shadow-purple-200">
                Get Started Free
              </button>
            </div>

            {/* Pro Plan (Middle Card - Purple) */}
            <div className="bg-[#7C3AED] p-10 rounded-[32px] shadow-2xl shadow-purple-300 transform md:scale-110 relative overflow-hidden text-white">
              <div className="absolute top-4 right-0 left-0 flex justify-center">
                <span className="bg-[#FCD34D] text-[#1E293B] text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">Most Popular</span>
              </div>
              <h4 className="text-2xl font-black mb-2 mt-4">Pro</h4>
              <p className="opacity-80 mb-6 font-medium">Best for professionals</p>
              <div className="mb-8">
                <span className="text-5xl font-black">$29</span>
                <span className="opacity-80 font-bold">/Month</span>
              </div>
              <ul className="text-left space-y-4 mb-10 font-medium">
                <li className="flex items-center gap-3"><i className="fa-solid fa-check"></i> Access to all premium tools</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check"></i> Unlimited templates</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check"></i> Priority support</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check"></i> Unlimited projects</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check"></i> Cloud sync</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check"></i> Advanced analytics</li>
              </ul>
              <button className="w-full py-4 rounded-full bg-white text-[#7C3AED] font-black hover:bg-gray-50 transition shadow-xl">
                Start Pro Trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
              <h4 className="text-2xl font-black mb-2 text-[#1E293B]">Enterprise</h4>
              <p className="text-gray-500 mb-6 font-medium">For teams and businesses</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-[#1E293B]">$99</span>
                <span className="text-gray-400 font-bold">/Month</span>
              </div>
              <ul className="text-left space-y-4 mb-10 text-gray-600 font-medium">
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-green-500"></i> Everything in Pro</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-green-500"></i> Team collaboration</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-green-500"></i> Custom integrations</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-green-500"></i> Dedicated support</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-green-500"></i> SLA guarantee</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-green-500"></i> Custom branding</li>
              </ul>
              <button className="w-full py-4 rounded-full bg-[#7C3AED] text-white font-black hover:bg-[#6D28D9] transition shadow-lg shadow-purple-200">
                Contact Sales
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* --- Final CTA Section (Ready to Transform Your Workflow?) --- */}
      <section className="bg-[#7C3AED] py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready To Transform Your Workflow?
          </h2>
          
          {/* Subtext */}
          <p className="text-white/80 text-lg md:text-xl mb-12 font-medium">
            Join thousands of professionals who are already using Digitools to work smarter.<br className="hidden md:block" /> 
            Start your free trial today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
            <button className="bg-white text-[#7C3AED] px-10 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition shadow-xl w-full sm:w-auto">
              Explore Products
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-black text-lg hover:bg-white/10 transition w-full sm:w-auto">
              View Pricing
            </button>
          </div>

          {/* Footer labels inside CTA */}
          <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm font-bold">
            <span>14-day free trial</span>
            <span className="hidden sm:inline">•</span>
            <span>No credit card required</span>
            <span className="hidden sm:inline">•</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>
  {/* --- Footer Section --- */}
      <footer className="bg-[#0F172A] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-black text-white mb-6">DigiTools</h2>
            <p className="text-gray-400 leading-relaxed">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Product</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-[#7C3AED] transition">Features</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition">Pricing</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition">Templates</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition">Integrations</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-[#7C3AED] transition">About</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition">Blog</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition">Careers</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition">Press</a></li>

            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Resources</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-[#7C3AED] transition">Documentation</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition">Help Center</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition">Community</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links Column (Resources এর ঠিক পরেই) */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Social Links</h4>
            <div className="flex gap-5 text-xl">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

       {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-10 pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <p className="text-gray-600 text-sm">
            © 2026 Digitools. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Services</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>

        </div>
      </footer>
    </div>
  ); 
}; 

export default App;