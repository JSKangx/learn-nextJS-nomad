import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div>
      <h1>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </h1>
    </div>
  );
}
