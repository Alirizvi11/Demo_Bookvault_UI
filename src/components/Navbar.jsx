import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6">
      <Link to="/" className="hover:underline">Dashboard</Link>
      <Link to="/transactions" className="hover:underline">Transactions</Link>
      <Link to="/admin" className="hover:underline">Admin Panel</Link>
    </nav>
  );
}
