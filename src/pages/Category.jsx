import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowLeft, Filter } from 'lucide-react';

const Category = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryType = searchParams.get('type');

  const filteredProducts = products.filter(p => p.category === categoryType);

  return (
    <div className="py-10 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/')}
            className="w-12 h-12 bg-white rounded-2xl border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">{categoryType || 'All Items'}</h1>
            <p className="text-gray-500 font-medium">Found {filteredProducts.length} items in this category</p>
          </div>
        </div>

        <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
          <Filter size={20} className="text-emerald-600" />
          Filter & Sort
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-20 text-center space-y-4">
          <div className="text-6xl">🔍</div>
          <h2 className="text-2xl font-bold text-gray-900">No products found</h2>
          <p className="text-gray-500">We couldn't find any products in this category at the moment.</p>
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all"
          >
            Go Back Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Category;
