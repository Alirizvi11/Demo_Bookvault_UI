import { useState } from "react";
import { returnBook } from "../api";

export default function ReturnForm() {
  const [txnId, setTxnId] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await returnBook(txnId);
    setStatus(res.message || "❌ Failed");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold">Return Book</h2>
      <input type="number" placeholder="Transaction ID" value={txnId} onChange={(e) => setTxnId(e.target.value)} className="border p-2 w-full rounded" />
      <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">Return</button>
      {status && <p className="mt-2 font-semibold">{status}</p>}
    </form>
  );
}
