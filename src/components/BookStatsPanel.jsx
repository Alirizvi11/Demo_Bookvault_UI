import CountUp from "react-countup";

export default function BookStatsPanel({ totalBooks }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded shadow-md text-center animate-fade-in">
      <h2 className="text-2xl font-bold mb-2">📘 Total Books</h2>
      <CountUp end={totalBooks} duration={2} className="text-5xl font-extrabold" />
    </div>
  );
}
