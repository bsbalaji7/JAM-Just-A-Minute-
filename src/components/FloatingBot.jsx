import React, { useState } from "react";
import { MessageSquare, X, Send, Bot, Image } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

const FloatingBot = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm **JAM AI Stylist 🤖**. Upload your photo and I will suggest the best dress for you.",
      isBot: true
    }
  ]);

  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (!input && !image) return;

    const userMessage = {
      text: input,
      image: image ? URL.createObjectURL(image) : null,
      isBot: false
    };

    setMessages((prev) => [...prev, userMessage]);

    const formData = new FormData();
    formData.append("message", input);
    if (image) formData.append("image", image);

    setInput("");
    setImage(null);

    try {

      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { text: data.reply, isBot: true }
      ]);

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        { text: "⚠️ AI server not responding.", isBot: true }
      ]);

    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">

      <AnimatePresence>
        {isOpen && (

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-80 h-96 bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >

            {/* Header */}
            <div className="bg-emerald-600 p-4 text-white flex justify-between items-center">

              <div className="flex items-center gap-2">
                <Bot size={20} />
                <span className="font-bold">JAM AI Stylist</span>
              </div>

              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>

            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">

              {messages.map((msg, i) => (

                <div
                  key={i}
                  className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                >

                  <div
                    className={`p-3 rounded-xl text-sm max-w-[80%] shadow ${
                      msg.isBot
                        ? "bg-white text-gray-800"
                        : "bg-emerald-600 text-white"
                    }`}
                  >

                    {msg.image && (
                      <img
                        src={msg.image}
                        alt="upload"
                        className="w-24 mb-2 rounded"
                      />
                    )}

                    {msg.isBot ? (
                      <div className="prose prose-sm max-w-none">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    ) : (
                      msg.text
                    )}

                  </div>

                </div>

              ))}

            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 flex gap-2 border-t">

              <label className="cursor-pointer">

                <Image size={20} />

                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImage}
                />

              </label>

              <input
                type="text"
                placeholder="Ask for dress suggestions..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-gray-100 px-3 py-2 rounded"
              />

              <button className="bg-emerald-600 text-white p-2 rounded">
                <Send size={18} />
              </button>

            </form>

          </motion.div>

        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-emerald-600 rounded-2xl text-white flex items-center justify-center shadow-xl"
      >

        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}

      </button>

    </div>
  );
};

export default FloatingBot;