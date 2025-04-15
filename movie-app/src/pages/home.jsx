import { movies } from "../data/movies";
import MovieCard from "../components/moviecard.jsx";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-t from-sky-500 to-indigo-500">
      <h1 className="text-4xl font-bold mb-8">Movie App</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
