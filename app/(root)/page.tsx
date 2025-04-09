import Search from "@/components/search/Search";
import StartupCard from "@/components/startup-card/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";

interface Props {
  searchParams: Promise<{ query?: string }>;
}

export default async function Home({ searchParams }: Props) {
  const { query } = await searchParams;

  const startups = await client.fetch(STARTUP_QUERY);
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
