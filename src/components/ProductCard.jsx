import React, { useState } from "react";
import { Star, Clock, ShoppingCart, Eye } from "lucide-react";
import { useCart } from "../store/cartStore";
import ARPreview from "./ARPreview";

const ProductCard = ({ product }) => {

  const { addToCart } = useCart();
  const [showAR, setShowAR] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-100 p-3 hover:shadow-xl hover:shadow-emerald-500/10 transition-all group flex flex-col h-full overflow-hidden relative">

        {/* Discount Badge */}
        <div className="absolute top-2 left-2 z-10 bg-black/80 text-white text-[10px] font-black px-2 py-1 rounded-lg backdrop-blur-md">
          {product.discount}
        </div>

        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-50 mb-4">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* TRY AR BUTTON */}
          <button
            onClick={() => setShowAR(true)}
            className="absolute bottom-2 left-2 flex items-center gap-1 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-semibold shadow hover:bg-emerald-500 hover:text-white transition"
          >
            <Eye size={14} />
            Try AR
          </button>

        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col">

          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 mb-2">

            <Clock size={12} className="text-emerald-500" />
            <span>{product.deliveryTime}</span>

            <span className="mx-1 opacity-20 text-gray-400">|</span>

            <div className="flex items-center gap-0.5 bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-lg">
              <Star size={10} fill="currentColor" />
              <span>{product.rating}</span>
            </div>

          </div>

          <h3 className="font-bold text-gray-800 line-clamp-2 leading-tight mb-2 min-h-[2.5rem] group-hover:text-emerald-700 transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-gray-500 line-clamp-3 mb-4 flex-1">
            {product.description}
          </p>

          {/* PRICE + ADD */}
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-dashed border-gray-100">

            <div className="flex flex-col">
              <span className="text-lg font-black text-gray-900 leading-none">
                ₹{product.price}
              </span>
              <span className="text-[10px] text-gray-400 font-medium">
                inclusive of taxes
              </span>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl transition-all shadow-md active:scale-95 text-sm"
            >
              <ShoppingCart size={16} />
              <span>ADD</span>
            </button>

          </div>

        </div>

      </div>

      {/* AR MODAL */}
      {showAR && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-xl w-full max-w-3xl p-4 relative">

            <button
              onClick={() => setShowAR(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <ARPreview model={product.model} />

          </div>

        </div>
      )}

    </>
  );
};

export default ProductCard;