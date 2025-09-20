import { useState } from "react";
import { loginAdmin } from "../api";

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await loginAdmin(username, password);
      if (res.status === "success") {
        setStatus("✅ Login successful");
        onLogin(); // Trigger admin panel view
      } else {
        setStatus("❌ Invalid credentials");
      }
    } catch (err) {
      setStatus("❌ Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="space-y-4 bg-white p-6 rounded shadow-md max-w-md mx-auto mt-10"
    >
      <h2 className="text-xl font-bold text-gray-800">Admin Login</h2>

      <input
        type="text"
        placeholder="Username"
        className="border p-2 w-full rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button
        type="submit"
        className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      {status && <p className="mt-4 font-semibold text-center">{status}</p>}
    </form>
  );
}
