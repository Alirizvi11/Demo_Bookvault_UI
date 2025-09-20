import { Bar } from "react-chartjs-2";

export default function TransactionGraph({ data }) {
  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: "Issued",
        data: data.issued,
        backgroundColor: "#3b82f6"
      },
      {
        label: "Returned",
        data: data.returned,
        backgroundColor: "#10b981"
      }
    ]
  };

  return (
    <div className="bg-white p-6 rounded shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">📊 Daily Transaction Stats</h2>
      <Bar data={chartData} />
    </div>
  );
}
