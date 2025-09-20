import { useParams } from "react-router-dom";

export default function GenreBooksPage({ books }) {
  const { genre } = useParams();
  const filtered = books.filter(b => b.genre.toLowerCase() === genre.toLowerCase());
  if (!books || !Array.isArray(books)) {
  return <p className="text-red-600 p-6">❌ Books data not available</p>;
}


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📚 {genre} Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map(book => (
          <div key={book.book_id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{book.title}</h3>
            <p className="text-sm">{book.author}</p>
            <p className="text-xs italic">{book.genre}</p>
            <p className="text-xs">Available: {book.available}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
