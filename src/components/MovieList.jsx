import { Link } from 'react-router-dom/dist';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies, videoType }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <Link to={`/movie/${movie.id}?filter=${videoType}`} key={movie.id}>
              <MovieCard key={movie.id} movie={movie} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
