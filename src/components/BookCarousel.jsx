import BookCarouselCard from "./BookCarouselCard";

export default function BookCarousel({ books }) {
  const chunkedBooks = [];
  const chunkSize = 4; // 4 cards per row

  for (let i = 0; i < books.length; i += chunkSize) {
    chunkedBooks.push(books.slice(i, i + chunkSize));
  }

  return (
    <div className="mt-6 space-y-6">
      <h2 className="text-xl font-bold mb-4">📚 Book Carousel</h2>
      {chunkedBooks.map((group, i) => (
        <div key={i} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {group.map(book => (
            <BookCarouselCard key={book.book_id} book={book} />
          ))}
        </div>
      ))}
    </div>
  );
}
