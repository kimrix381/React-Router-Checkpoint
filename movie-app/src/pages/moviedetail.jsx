import { useParams, Link } from "react-router-dom";
import { movies } from "../data/movies";

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p className="text-center mt-10">Movie not found</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-t from-sky-500 to-indigo-500 p-4 text-center">
      <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
      <p className="max-w-xl text-gray-700 mb-6">{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
        className="mb-6 rounded-md shadow-lg"
      ></iframe>
      <Link to="/" className="text-black-600 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}

export default MovieDetail;
