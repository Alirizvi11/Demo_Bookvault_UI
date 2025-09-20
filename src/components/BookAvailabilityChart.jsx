import { Bar } from "react-chartjs-2";

export default function BookAvailabilityChart({ books }) {
  const labels = books.map(b => b.title);
  const data = books.map(b => b.available);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Available Copies",
        data,
        backgroundColor: "#10b981"
      }
    ]
  };

  return (
    <div className="bg-white p-6 rounded shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">📊 Book Availability</h2>
      <Bar data={chartData} />
    </div>
  );
}
