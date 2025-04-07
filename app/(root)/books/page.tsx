const Books = async () => {
  const request = await fetch("http://localhost:3000/api/books");
  const books = await request.json();

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book: any) => (
          <div
            key={book.id}
            className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300"
          >
            <h2 className="text-xl font-bold text-white mb-2">{book.name}</h2>
            <p className="text-gray-300 mb-2">Author: {book.author}</p>
            <p className="text-gray-400">Year: {book.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
