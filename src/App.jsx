import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import FloatingBot from "./components/FloatingBot";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Payment from "./pages/Payment";

import { CartProvider } from "./store/cartStore";
import { AuthProvider, useAuth } from "./store/authStore";


/* -------- PROTECTED ROUTE -------- */

function ProtectedRoute({ children }) {

  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}


/* -------- MAIN APP -------- */

function App() {

  return (

    <AuthProvider>

      <CartProvider>

        <Router>

          <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">

            {/* NAVBAR */}
            <Navbar />

            {/* MAIN CONTENT */}
            <main className="max-w-7xl mx-auto px-4">

              <Routes>

                {/* HOME */}
                <Route path="/" element={<Home />} />

                {/* CATEGORY */}
                <Route path="/category" element={<Category />} />

                {/* LOGIN */}
                <Route path="/login" element={<Login />} />

                {/* REGISTER */}
                <Route path="/register" element={<Register />} />

                {/* PROFILE (PROTECTED) */}
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />

                {/* PAYMENT (PROTECTED) */}
                <Route
                  path="/payment"
                  element={
                    <ProtectedRoute>
                      <Payment />
                    </ProtectedRoute>
                  }
                />

              </Routes>

            </main>

            {/* CART SIDEBAR */}
            <CartSidebar />

            {/* FLOATING CHAT BOT */}
            <FloatingBot />



            {/* FOOTER */}

            <footer className="bg-white border-t mt-20 py-12">

              <div className="max-w-7xl mx-auto px-4 text-center">

                <div className="flex items-center justify-center gap-2 mb-4">

                  <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">

                    <span className="text-sm font-black">J</span>

                  </div>

                  <span className="text-xl font-black tracking-tighter">
                    JAM
                  </span>

                </div>

                <p className="text-gray-400 text-sm font-medium">
                  © 2026 JAM – Just A Minute. All rights reserved.
                </p>

                <div className="flex justify-center gap-6 mt-6">

                  {["Privacy", "Terms", "Help", "Contact"].map((item) => (

                    <a
                      key={item}
                      href="#"
                      className="text-xs font-bold text-gray-400 hover:text-emerald-600 uppercase tracking-widest"
                    >
                      {item}
                    </a>

                  ))}

                </div>

              </div>

            </footer>

          </div>

        </Router>

      </CartProvider>

    </AuthProvider>

  );
}

export default App;
