import { Search } from "@/app/components";

export default function Home() {
  return (
    <section className="pink_container">
      <h1 className="heading">
        Pitch Your Startup, <br /> Connect with Entrepreneurs
      </h1>
      <p className="sub-heading !max-w-3xl">
        Submit ideas, vote on Pitches, and Get Noticed in Virtual Competitions.
      </p>
      <Search />
    </section>
  );
}
