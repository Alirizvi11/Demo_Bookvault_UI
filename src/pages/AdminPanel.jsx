import { useState } from "react";
import AdminDashboard from "../components/AdminDashboard";
import OverdueAlertPanel from "../components/OverdueAlertPanel";
import ExportToCSV from "../components/ExportToCSV";
import UserForm from "../components/UserForm"; // 👤 New user entry form

export default function AdminPanel() {
  const [tab, setTab] = useState("dashboard");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛠 Admin Panel</h2>

      <div className="flex gap-4 mb-6">
        <button onClick={() => setTab("dashboard")} className="bg-blue-600 text-white px-4 py-2 rounded">📊 Dashboard</button>
        <button onClick={() => setTab("alerts")} className="bg-red-600 text-white px-4 py-2 rounded">⏰ Overdue Alerts</button>
        <button onClick={() => setTab("export")} className="bg-indigo-600 text-white px-4 py-2 rounded">📤 Export CSV</button>
        <button onClick={() => setTab("users")} className="bg-green-600 text-white px-4 py-2 rounded">👤 Add User</button>
      </div>

      {tab === "dashboard" && <AdminDashboard />}
      {tab === "alerts" && <OverdueAlertPanel />}
      {tab === "export" && <ExportToCSV />}
      {tab === "users" && <UserForm />}
    </div>
  );
}
