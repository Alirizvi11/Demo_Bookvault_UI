import { useEffect, useState } from "react";
import { getDashboardStats } from "../api";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ books: 0, members: 0, transactions: 0 });

  useEffect(() => {
    getDashboardStats().then((data) => {
      console.log("📊 Dashboard Stats:", data); // ✅ Debug log
      setStats(data);
    });
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      <div className="bg-blue-100 p-4 rounded">📚 Books: {stats.books}</div>
      <div className="bg-green-100 p-4 rounded">👥 Members: {stats.members}</div>
      <div className="bg-yellow-100 p-4 rounded">📄 Transactions: {stats.transactions}</div>
    </div>
  );
}
