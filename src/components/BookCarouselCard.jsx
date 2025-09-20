import { useState } from "react";
import "./BookCarouselCard.css";

export default function BookCarouselCard({ book }) {
  const [flipped, setFlipped] = useState(false);
  const isLowStock = book?.available !== undefined && book.available <= 2;

  if (!book) return null;

  const fallbackCover = "https://covers.openlibrary.org/b/id/10909258-L.jpg";
  const cover = book.cover_url || fallbackCover;

  return (
    <div
      className={`carousel-card ${flipped ? "flipped" : ""}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="carousel-card-inner">
        {/* Front Side */}
        <div className="carousel-card-front bg-white p-2 rounded-xl shadow-md flex flex-col items-center justify-center">
         <img src={cover} alt={book.title} className="w-full h-40 object-cover rounded-md shadow" />

          <h3 className="text-sm font-bold mt-2 text-gray-800 text-center">{book.title}</h3>
        </div>

        {/* Back Side */}
        <div className="carousel-card-back bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-xl shadow-md text-gray-800">
          <p><strong>Book ID:</strong> {book.book_id}</p>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p>
            <strong>Available:</strong>{" "}
            <span className={isLowStock ? "blink text-red-600 font-bold" : ""}>
              {book.available}
            </span>
          </p>
          <p className="mt-2 text-sm text-gray-600">Hover to flip back</p>
        </div>
      </div>
    </div>
  );
}
