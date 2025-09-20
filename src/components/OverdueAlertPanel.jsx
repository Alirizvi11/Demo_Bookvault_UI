import { useEffect, useState } from "react";
import { getOverdueTransactions } from "../api";

export default function OverdueAlertPanel() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    getOverdueTransactions().then(setAlerts);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">⏰ Overdue Alerts</h2>
      <ul className="space-y-2">
        {alerts.map(txn => (
          <li key={txn.txn_id} className="border p-3 rounded text-red-600">
            Member {txn.member_id} has not returned Book {txn.book_id} — Fine ₹{txn.fine}
          </li>
        ))}
      </ul>
    </div>
  );
}
