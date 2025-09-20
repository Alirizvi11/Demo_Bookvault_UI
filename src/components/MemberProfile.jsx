import { useEffect, useState } from "react";
import { getMemberTransactions, getMembers } from "../api";

export default function MemberProfile({ memberId }) {
  const [txns, setTxns] = useState([]);
  const [member, setMember] = useState(null);

  useEffect(() => {
    getMemberTransactions(memberId).then(setTxns);
    getMembers().then((members) => {
      const found = members.find(m => m.member_id === memberId);
      setMember(found);
    });
  }, [memberId]);

  const totalIssued = txns.length;
  const totalReturned = txns.filter(t => t.return_date).length;
  const totalPending = totalIssued - totalReturned;
  const issueDates = txns.map(t => t.issue_date);

  return (
    <div className="p-6 bg-white rounded shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">👤 Member Profile</h2>
      {member ? (
        <div className="mb-4 text-gray-700">
          <p><strong>Name:</strong> {member.name}</p>
          <p><strong>Email:</strong> {member.email}</p>
          <p><strong>Phone:</strong> {member.phone}</p>
        </div>
      ) : (
        <p className="text-red-600">Member not found</p>
      )}

      <div className="mb-4 bg-gray-100 p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">📊 Summary</h3>
        <p><strong>Total Books Issued:</strong> {totalIssued}</p>
        <p><strong>Returned:</strong> ✅ {totalReturned}</p>
        <p><strong>Pending:</strong> ❌ {totalPending}</p>
        <p><strong>Issue Dates:</strong> {issueDates.join(", ")}</p>
      </div>

      <h3 className="text-lg font-semibold mb-2">📘 Issued Books History</h3>
      <ul className="space-y-2">
        {txns.map(txn => (
          <li key={txn.txn_id} className="border p-3 rounded">
            Book ID: {txn.book_id} | Issued: {txn.issue_date} | Returned: {txn.return_date || "❌ Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}
