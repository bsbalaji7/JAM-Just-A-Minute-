import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import FloatingBot from "./components/FloatingBot";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { CartProvider } from "./store/cartStore";
import { AuthProvider } from "./store/authStore";

function App() {

  return (

    <AuthProvider>

      <CartProvider>

        <Router>

          <div className="min-h-screen bg-gray-50 text-gray-900">

            <Navbar />

            <main className="max-w-7xl mx-auto px-4">

              <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/category" element={<Category />} />

                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

              </Routes>

            </main>

            <CartSidebar />

            <FloatingBot />

          </div>

        </Router>

      </CartProvider>

    </AuthProvider>

  );

}

export default App;