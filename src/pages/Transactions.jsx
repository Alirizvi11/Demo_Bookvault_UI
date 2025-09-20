import { useState, useEffect } from "react";
import { getTransactions, getMembers } from "../api";
import MemberProfile from "../components/MemberProfile";
import TransactionGraph from "../components/TransactionGraph";

export default function Transactions() {
  const [date, setDate] = useState("");
  const [data, setData] = useState({ dates: [], issued: [], returned: [] });
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    getMembers().then(setMembers);
  }, []);

  useEffect(() => {
    if (date) {
      getTransactions(date).then((res) => {
        const issuedCount = res.length;
        const returnedCount = res.filter(txn => txn.return_date).length;
        setData({
          dates: [date],
          issued: [issuedCount],
          returned: [returnedCount]
        });
      });
    }
  }, [date]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📄 Transaction History</h2>

      <input
        type="date"
        className="border p-2 rounded mb-4"
        onChange={(e) => setDate(e.target.value)}
      />

      {date && (
        <>
          <TransactionGraph data={data} />
          {data.issued[0] === 0 && (
            <p className="text-red-600 mt-4">No transactions found for selected date.</p>
          )}
        </>
      )}

      <div className="mt-6">
        <label className="block font-semibold mb-2">Select Member:</label>
        <select
          className="border p-2 rounded w-full"
          onChange={(e) => setSelectedMember(Number(e.target.value))}
        >
          <option value="">-- Choose Member --</option>
          {members.map(m => (
            <option key={m.member_id} value={m.member_id}>
              {m.name} ({m.member_id})
            </option>
          ))}
        </select>
      </div>

      {selectedMember && (
        <MemberProfile memberId={selectedMember} />
      )}
    </div>
  );
}
