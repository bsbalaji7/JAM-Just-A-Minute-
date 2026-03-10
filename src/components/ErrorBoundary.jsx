import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    // Keep this lightweight; user can read the message on-screen.
    console.error("App crashed:", error, errorInfo);
  }

  handleReset = () => {
    try {
      localStorage.removeItem("jam_cart");
      localStorage.removeItem("jam_user");
      localStorage.removeItem("jam_token");
    } catch {
      // ignore
    }
    window.location.reload();
  };

  render() {
    if (!this.state.error) return this.props.children;

    const message =
      this.state.error instanceof Error
        ? this.state.error.message
        : String(this.state.error);

    return (
      <div style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
        <h1 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>
          App Error
        </h1>
        <p style={{ marginBottom: 16 }}>
          The app crashed while rendering. Error: <code>{message}</code>
        </p>
        <button
          onClick={this.handleReset}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #ddd",
            background: "#fff",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          Clear saved data and reload
        </button>
      </div>
    );
  }
}

