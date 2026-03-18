import React from "react";
import "@google/model-viewer";

const ARPreview = ({ model }) => {
  return (
    <div className="w-full flex flex-col items-center p-5">

      <h2 className="text-2xl font-bold mb-4 text-center">
        Try Before You Buy (AR View)
      </h2>

      <model-viewer
        src={model || "https://modelviewer.dev/shared-assets/models/Astronaut.glb"}
        ar
        ar-modes="scene-viewer webxr quick-look"
        camera-controls
        auto-rotate
        shadow-intensity="1"
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "#f5f5f5",
          borderRadius: "16px"
        }}
      >
        <button
          slot="ar-button"
          className="bg-emerald-600 text-white px-6 py-2 rounded-lg shadow hover:bg-emerald-700"
        >
          View in Your Space
        </button>
      </model-viewer>

      <p className="text-sm text-gray-500 mt-3 text-center">
        Move your phone to place the product in your space.
      </p>

    </div>
  );
};

export default ARPreview;