import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { ArrowRight, Zap, ShieldCheck, Map } from 'lucide-react';
import "../css/style.css";

const categories = [
  { name: 'Grocery', icon: '🛒', iconBg: 'bg-orange-100' },
  { name: 'Food & Restaurant', icon: '🍕', iconBg: 'bg-red-100' },
  { name: 'Cafe', icon: '☕', iconBg: 'bg-amber-100' },
  { name: 'Electronics', icon: '🎧', iconBg: 'bg-blue-100' },
  { name: 'Events', icon: '🎉', iconBg: 'bg-violet-100' },
  { name: 'Fashion', icon: '👕', iconBg: 'bg-fuchsia-100' },
  { name: 'Ev  Book', icon: '👕', iconBg: 'bg-fuchsia-100' },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section - Option A Design */}
      <section className="relative h-[450px] md:h-[550px] overflow-hidden rounded-[40px] mt-6 bg-emerald-950">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80" 
            className="w-full h-full object-cover opacity-40"
            alt="Grocery background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/80 to-transparent" />
        </div>
        
        <div className="relative h-full flex flex-col justify-center px-8 md:px-20 max-w-4xl space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full border border-emerald-500/30 backdrop-blur-md text-sm font-bold animate-pulse">
              <Zap size={16} fill="currentColor" />
              <span>SUPER FAST DELIVERY</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
              A Minute a Day, <br />
              <span className="text-emerald-500">Smarter Every Way.</span>
            </h1>
            <p className="text-emerald-100/70 text-lg md:text-xl max-w-xl font-medium">
              JAM is your hyper-local neighborhood store. We deliver groceries, meals, and electronics in 10 minutes.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/category?type=Grocery')}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-500/20 active:scale-95 flex items-center gap-2"
            >
              Order Now <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-6 px-4">
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl leading-none">10</span>
                <span className="text-emerald-400 text-[10px] uppercase font-bold tracking-widest">Minutes</span>
              </div>
              <div className="w-px h-8 bg-emerald-500/30" />
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl leading-none">50k+</span>
                <span className="text-emerald-400 text-[10px] uppercase font-bold tracking-widest">Products</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Shop by Category</h2>
          <button className="text-emerald-600 font-bold flex items-center gap-1 hover:underline">
            See all <ArrowRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => navigate(`/category?type=${encodeURIComponent(cat.name)}`)}
              className="group h-64 bg-white rounded-[34px] border border-gray-200/80 hover:shadow-lg transition-all text-center flex flex-col items-center justify-center gap-7"
            >
              <div className={`w-24 h-24 ${cat.iconBg} rounded-[22px] flex items-center justify-center text-5xl group-hover:scale-105 transition-transform`}>
                {cat.icon}
              </div>
              <span className="font-extrabold text-gray-900 tracking-tight text-xl md:text-2xl leading-tight px-2">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Recommended Section */}
      <section className="px-4 bg-gray-50 -mx-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8 px-4">
            <div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">Curated for You</h2>
              <p className="text-gray-500 font-medium">Bestsellers in your neighborhood</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4">
            {products.slice(0, 5).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="px-4">
        <div className="bg-emerald-600 rounded-[40px] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] -mr-32 -mt-32 opacity-50" />
          
          <div className="relative space-y-8 max-w-2xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Why Choose JAM?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-500/50 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-400/30">
                  <Zap size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Instant Delivery</h4>
                  <p className="text-emerald-100/70 text-sm">Under 10 minutes at your door.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-500/50 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-400/30">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Quality Check</h4>
                  <p className="text-emerald-100/70 text-sm">100% fresh & original products.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-500/50 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-400/30">
                  <Map size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Live Tracking</h4>
                  <p className="text-emerald-100/70 text-sm">Follow your order in real-time.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group flex justify-center w-full md:w-auto">
             <div className="w-72 h-72 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-3xl border border-white/20 animate-spin-slow">
                <div className="w-56 h-56 bg-white/20 rounded-full flex items-center justify-center">
                   <div className="w-40 h-40 bg-white rounded-3xl flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-700">
                      <span className="text-6xl font-black text-emerald-600">JAM</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
