import { useState } from "react";
import { registerMember } from "../api";

export default function MemberForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerMember({ name, email, phone });
    setStatus(res.message || "❌ Failed");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold">Register Member</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 w-full rounded" />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full rounded" />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="border p-2 w-full rounded" />
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Register</button>
      {status && <p className="mt-2 font-semibold">{status}</p>}
    </form>
  );
}
