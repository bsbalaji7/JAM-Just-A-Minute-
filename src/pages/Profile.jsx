import React, { useEffect } from "react";
import { useAuth } from "../store/authStore";
import {
  Package,
  MapPin,
  Phone,
  Mail,
  User,
  ChevronRight,
  LogOut,
  ShoppingBag
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {

  const { user, logout, orders = [] } = useAuth();
  const navigate = useNavigate();

  /* Protect profile route */

  useEffect(() => {

    const token = localStorage.getItem("jam_token");

    if (!token || !user) {
      navigate("/login");
    }

  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      <div className="flex flex-col md:flex-row gap-8">

        {/* Sidebar */}

        <div className="w-full md:w-80 shrink-0 space-y-6">

          <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm text-center">

            <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User size={48} />
            </div>

            <h2 className="text-2xl font-black text-gray-900">
              {user.name}
            </h2>

            <p className="text-gray-500 font-medium mb-6">
              {user.email}
            </p>

            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="w-full py-3 bg-red-50 text-red-600 font-bold rounded-2xl hover:bg-red-100 transition-colors flex items-center justify-center gap-2"
            >
              <LogOut size={18} />
              Logout
            </button>

          </div>

          {/* Account Details */}

          <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm space-y-4">

            <h3 className="font-black text-gray-900 px-2">
              Account Details
            </h3>

            <div className="space-y-1">

              <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-2xl transition-colors">

                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                  <Mail size={18} />
                </div>

                <div className="flex-1">
                  <p className="text-[10px] text-gray-400 font-bold uppercase">
                    Email
                  </p>

                  <p className="text-sm font-bold text-gray-700">
                    {user.email}
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-2xl transition-colors">

                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                  <Phone size={18} />
                </div>

                <div className="flex-1">
                  <p className="text-[10px] text-gray-400 font-bold uppercase">
                    Phone
                  </p>

                  <p className="text-sm font-bold text-gray-700">
                    {user.phone}
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-2xl transition-colors">

                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                  <MapPin size={18} />
                </div>

                <div className="flex-1">
                  <p className="text-[10px] text-gray-400 font-bold uppercase">
                    Address
                  </p>

                  <p className="text-sm font-bold text-gray-700">
                    Chhindwara City, MP
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Orders Section */}

        <div className="flex-1">

          <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm min-h-[600px]">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                <Package className="text-emerald-600" size={32} />
                Order History
              </h2>

              <span className="bg-emerald-100 text-emerald-700 text-xs font-black px-4 py-1.5 rounded-full">
                {orders.length} ORDERS
              </span>

            </div>

            {orders.length === 0 ? (

              <div className="flex flex-col items-center justify-center py-20 text-center">

                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag size={40} className="text-gray-300" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No orders yet
                </h3>

                <p className="text-gray-500 mb-6 max-w-xs">
                  Looks like you haven't placed any orders yet.
                </p>

                <button
                  onClick={() => navigate("/")}
                  className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700"
                >
                  Start Shopping
                </button>

              </div>

            ) : (

              <div className="space-y-6">

                {orders.map((order) => (

                  <div key={order.id} className="border rounded-3xl p-6">

                    <div className="flex justify-between mb-4">

                      <div>

                        <p className="font-black">
                          Order #{order.id}
                        </p>

                        <p className="text-sm text-gray-500">
                          {order.date}
                        </p>

                      </div>

                      <p className="text-emerald-600 font-black">
                        ₹{order.total}
                      </p>

                    </div>

                    <div className="flex flex-wrap gap-2">

                      {order.items.map((item, idx) => (

                        <span key={idx} className="text-xs bg-gray-100 px-3 py-1 rounded-xl">
                          {item.quantity} × {item.name}
                        </span>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;