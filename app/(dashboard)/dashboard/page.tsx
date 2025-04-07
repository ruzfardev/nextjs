const Dashboard = async () => {
  const responseToAlbums = await fetch(
    "https://jsonplaceholder.typicode.com/albums"
  );
  if (!responseToAlbums.ok) {
    throw new Error("Failed to fetch data");
  }
  const albums = await responseToAlbums.json();

  return (
    <div>
      <h1 className="text-2xl">Dashboard</h1>
      <ul>
        {albums.map((album: { id: number; title: string }) => (
          <li key={album.id}>
            <h2>{album.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
