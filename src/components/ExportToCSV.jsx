import { exportTransactionsCSV } from "../api";

export default function ExportToCSV() {
  const handleExport = async () => {
    const csv = await exportTransactionsCSV();
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();
  };

  return (
    <button onClick={handleExport} className="bg-indigo-600 text-white px-4 py-2 rounded">
      📤 Export Transactions
    </button>
  );
}
