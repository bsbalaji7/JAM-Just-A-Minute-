import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { formatInr } from "../utils/currency";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [method, setMethod] = useState("card");

  const total = useMemo(() => {
    const fromState = location.state?.total;
    return Number.isFinite(fromState) ? fromState : 309;
  }, [location.state]);

  const handlePayment = () => {
    alert("Payment Successful 🎉");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[420px]">
        <h2 className="text-2xl font-bold text-center mb-6">
          Secure Payment
        </h2>

        <div className="bg-green-500 text-white p-4 rounded-lg text-center mb-6">
          <p>Total Amount</p>

          <h1 className="text-3xl font-bold">
            {formatInr(total)}
          </h1>
        </div>

        <h3 className="font-semibold mb-3">
          Select Payment Method
        </h3>

        <div className="space-y-2 mb-6">
          <label className="flex gap-2">
            <input
              type="radio"
              value="card"
              checked={method === "card"}
              onChange={(e) => setMethod(e.target.value)}
            />
            Card Payment
          </label>

          <label className="flex gap-2">
            <input
              type="radio"
              value="upi"
              checked={method === "upi"}
              onChange={(e) => setMethod(e.target.value)}
            />
            UPI Payment
          </label>

          <label className="flex gap-2">
            <input
              type="radio"
              value="cod"
              checked={method === "cod"}
              onChange={(e) => setMethod(e.target.value)}
            />
            Cash On Delivery
          </label>
        </div>

        {method === "card" && (
          <div className="space-y-3 mb-5">
            <input
              className="border w-full p-2 rounded"
              placeholder="Card Number"
            />

            <div className="flex gap-2">
              <input
                className="border w-full p-2 rounded"
                placeholder="Expiry"
              />

              <input
                className="border w-full p-2 rounded"
                placeholder="CVV"
              />
            </div>

            <input
              className="border w-full p-2 rounded"
              placeholder="Card Holder Name"
            />
          </div>
        )}

        {method === "upi" && (
          <input
            className="border w-full p-2 rounded mb-5"
            placeholder="Enter UPI ID"
          />
        )}

        <button
          onClick={handlePayment}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
