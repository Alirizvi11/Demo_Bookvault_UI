import { useState } from "react";
import { issueBook } from "../api";

export default function IssueForm() {
  const [bookId, setBookId] = useState("");
  const [memberId, setMemberId] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await issueBook(bookId, memberId);
    setStatus(res.message || "❌ Failed");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold">Issue Book</h2>
      <input type="number" placeholder="Book ID" value={bookId} onChange={(e) => setBookId(e.target.value)} className="border p-2 w-full rounded" />
      <input type="number" placeholder="Member ID" value={memberId} onChange={(e) => setMemberId(e.target.value)} className="border p-2 w-full rounded" />
      <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">Issue</button>
      {status && <p className="mt-2 font-semibold">{status}</p>}
    </form>
  );
}
