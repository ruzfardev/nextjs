import Search from "@/components/search/Search";
import StartupCard from "@/components/startup-card/StartupCard";

interface Props {
  searchParams: Promise<{ query?: string }>;
}

export default async function Home({ searchParams }: Props) {
  const { query } = await searchParams;
  const startups = [
    {
      _createdAt: "2023-09-10T12:34:56Z",
      views: 100,
      author: { _id: 1, name: "John Doe" },
      _id: 1,
      title: "Innovative App",
      category: "Technology",
      description:
        "A revolutionary app that connects people with similar interests.",
      image:
        "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    // Add more startup objects as needed
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <Search query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All startups"}
        </p>
        <ul className="mt-7 card_grid">
          {startups.length > 0 ? (
            startups.map((startup) => (
              <StartupCard key={startup._id} startup={startup} />
            ))
          ) : (
            <p className="no-results">No startups found.</p>
          )}
        </ul>
      </section>
    </>
  );
}
