import { useState } from "react";
import { addBook } from "../api";

export default function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [copies, setCopies] = useState(1);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addBook({ title, author, genre, copies });
    setStatus(res.message || "❌ Failed");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold">Add Book</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 w-full rounded" />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} className="border p-2 w-full rounded" />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} className="border p-2 w-full rounded" />
      <input type="number" placeholder="Copies" value={copies} onChange={(e) => setCopies(e.target.value)} className="border p-2 w-full rounded" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add Book</button>
      {status && <p className="mt-2 font-semibold">{status}</p>}
    </form>
  );
  
}
