import { useNavigate } from "react-router-dom";
import GenreIconMap from "./GenreIconMap";
import { FaBook } from "react-icons/fa";

export default function GenreCard({ genre }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/genre/${genre.toLowerCase()}`);
  };

  const genreThemes = {
    Fiction: "from-pink-200 to-pink-400",
    Programming: "from-blue-200 to-blue-400",
    Classic: "from-yellow-200 to-yellow-400",
    Dystopian: "from-gray-300 to-gray-500",
    Romance: "from-rose-200 to-rose-400",
    Fantasy: "from-purple-200 to-purple-400",
    Thriller: "from-red-200 to-red-400",
    Drama: "from-orange-200 to-orange-400",
    "Non-Fiction": "from-green-200 to-green-400",
    Adventure: "from-teal-200 to-teal-400",
    Historical: "from-amber-200 to-amber-400",
    Horror: "from-gray-700 to-gray-900 text-white",
    Biography: "from-indigo-200 to-indigo-400",
    Memoir: "from-lime-200 to-lime-400",
    "Self-Help": "from-cyan-200 to-cyan-400",
    Philosophy: "from-sky-200 to-sky-400",
    Finance: "from-fuchsia-200 to-fuchsia-400",
    Motivation: "from-violet-200 to-violet-400",
    Business: "from-blue-300 to-blue-500",
    Leadership: "from-zinc-200 to-zinc-400",
  };

  const theme = genreThemes[genre] || "from-indigo-200 to-indigo-400";
  const Icon = GenreIconMap[genre] || <FaBook />;

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer bg-gradient-to-br ${theme} p-6 rounded-xl shadow-md hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center h-32`}
    >
      <div className="text-3xl mb-2">{Icon}</div>
      <h2 className="text-xl font-bold tracking-wide">{genre}</h2>
    </div>
  );
}
