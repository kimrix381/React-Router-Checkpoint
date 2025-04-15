import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center w-64"
    >
      <img src={movie.image} alt={movie.title} className="rounded-md mb-4" />
      <h3 className="text-xl font-semibold">{movie.title}</h3>
    </Link>
  );
}

export default MovieCard;
