import React from 'react';
import { ShoppingCart, User, MapPin, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../store/cartStore';
import { useAuth } from '../store/authStore';

const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
            <span className="text-xl font-black italic">J</span>
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tighter text-emerald-900 leading-none">JAM</h1>
            <p className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold">Just A Minute</p>
          </div>
        </Link>

        {/* Location - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border text-sm cursor-pointer hover:bg-gray-100 transition-colors max-w-xs">
          <MapPin size={18} className="text-emerald-600 shrink-0" />
          <span className="truncate font-medium">Home - Chhindwara City, MP</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md relative group hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-600 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search for 'Milk', 'Pizza', 'Phone'..." 
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-emerald-600 outline-none transition-all shadow-inner"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {user ? (
            <Link 
              to="/profile" 
              className="flex items-center gap-2 p-2 hover:bg-emerald-50 rounded-xl transition-colors text-emerald-900 font-medium"
            >
              <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
                <User size={20} />
              </div>
              <span className="hidden lg:block">Account</span>
            </Link>
          ) : (
            <Link 
              to="/login" 
              className="px-6 py-2.5 bg-emerald-50 text-emerald-700 font-bold rounded-xl hover:bg-emerald-100 transition-all active:scale-95"
            >
              Login
            </Link>
          )}

          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all shadow-md active:scale-95 group"
          >
            <ShoppingCart size={22} className="group-hover:scale-110 transition-transform" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full ring-2 ring-white animate-bounce">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
