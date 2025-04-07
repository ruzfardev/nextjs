const Dashboard = async () => {
  const responseToAlbums = await fetch(
    "https://jsonplaceholder.typicode.com/albums"
  );
  if (!responseToAlbums.ok) {
    throw new Error("Failed to fetch data");
  }
  const albums = await responseToAlbums.json();

  return (
    <div className="p-8 bg-gray-900">
      <h1 className="text-2xl font-bold mb-6 text-white">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {albums.map((album: { id: number; title: string }) => (
          <div
            key={album.id}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-700"
          >
            <span className="text-gray-400 text-sm">{album.id}</span>
            <h2 className="text-lg font-semibold mt-1 text-white">
              {album.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
