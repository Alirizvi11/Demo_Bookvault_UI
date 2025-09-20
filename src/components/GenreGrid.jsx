import GenreCard from "./GenreCard";

export default function GenreGrid({ books }) {
  const genres = [...new Set(books.map(b => b.genre))];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {genres.map((genre, i) => (
        <GenreCard key={i} genre={genre} />
      ))}
    </div>
  );
}
