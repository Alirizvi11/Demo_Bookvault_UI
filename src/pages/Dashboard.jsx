// export default function Dashboard() {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-blue-600">📚 Welcome to BookVault</h1>
//       <p className="mt-2 text-gray-700">Manage books, members, and transactions with ease.</p>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { getBooks } from "../api";
import WelcomeHero from "../components/WelcomeBanner";
import GenreGrid from "../components/GenreGrid";
import BookAvailabilityChart from "../components/BookAvailabilityChart";
import BookCarousel from "../components/BookCarousel";

export default function Dashboard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    // <div className="p-6 space-y-6">
    <div className="p-6 space-y-8">
      <WelcomeHero />
      <GenreGrid books={books} />
      <BookAvailabilityChart books={books} />
      <BookCarousel books={books} />
    </div>
  );
}
