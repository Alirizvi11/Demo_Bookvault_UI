import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GraphPanel({ data }) {
  const chartData = {
    labels: ["Overdue Books", "Active Members"],
    datasets: [
      {
        label: "Library Stats",
        data: [data.overdue_books, data.active_members],
        backgroundColor: ["#ef4444", "#3b82f6"],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">📊 Analytics Overview</h2>
      <Bar data={chartData} />
      <p className="mt-4 text-gray-700">
        Most Popular Book: <span className="font-semibold text-green-600">{data.most_popular}</span>
      </p>
    </div>
  );
}
