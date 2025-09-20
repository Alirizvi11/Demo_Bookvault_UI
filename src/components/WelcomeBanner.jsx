export default function WelcomeHero() {
  return (
    <div className="text-center space-y-4 animate-fade-in">
      <h1 className="text-5xl font-extrabold tracking-wide text-blue-700">📚 BookVault</h1>
      <p className="text-lg text-gray-600">There is nothing better than to read.</p>
      <img
        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
        alt="Books Banner"
        className="mx-auto rounded-xl shadow-lg w-full max-w-3xl object-cover"
      />
    </div>
  );
}
