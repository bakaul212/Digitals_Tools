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

