import { useState, useEffect } from "react";
import { registerMember, getBooks, issueBook } from "../api";

export default function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [status, setStatus] = useState("");
  
useEffect(() => {
  getBooks().then((data) => {
    const bookList = Array.isArray(data) ? data : data.books || [];
    const available = bookList.filter(b => b.available > 0);
    setBooks(available);
  });
}, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1: Register Member
    
    const memberRes = await registerMember({ name, email, phone });
    
    if (memberRes.error) {
      setStatus("❌ Member registration failed");
      return;
    }

    // Step 2: Get new member ID
    const members = await fetch("https://bookvault-backend.onrender.com/members/get-members").then(res => res.json());
    const newMember = members[members.length - 1]; // Last inserted

    // Step 3: Issue Book
    const issueRes = await issueBook(Number(selectedBook), newMember.member_id, issueDate, returnDate);
    if (issueRes.error) {
      setStatus("❌ Book issue failed");
      return;
    }

    setStatus(`✅ ${name} registered and issued Book ${selectedBook}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold">👤 Register Member + Issue Book</h2>

      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 w-full rounded" />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full rounded" />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="border p-2 w-full rounded" />

      <label className="block font-semibold">Select Book to Issue:</label>
      <select value={selectedBook} onChange={(e) => setSelectedBook(e.target.value)} className="border p-2 w-full rounded">
        <option value="">-- Choose Book --</option>
        {books.map(book => (
          <option key={book.book_id} value={book.book_id}>
            {book.title} ({book.available} available)
          </option>
        ))}
      </select>

      <label className="block font-semibold">Issue Date:</label>
      <input type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} className="border p-2 w-full rounded" />

      <label className="block font-semibold">Expected Return Date:</label>
      <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className="border p-2 w-full rounded" />

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Register & Issue</button>
      {status && <p className="mt-2 font-semibold">{status}</p>}
    </form>
  );
}
