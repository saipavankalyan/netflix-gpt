import { useState } from 'react';
import { IMG_CDN_URL } from '../utils/constants';
import MovieDetailsCard from './MovieDetailsCard';

const MovieCard = ({ movie }) => {
  const [showDetails, setShowDetails] = useState(false);

  const posterPath = movie?.poster_path;
  const title = movie?.title;
  const rating = movie?.vote_average;
  const genreIds = movie?.genre_ids;
  const releaseYear = movie?.release_date.substring(0, 4);
  const backdropPath = movie?.backdrop_path;

  if (!posterPath) return null;

  return (
    <div
      onMouseEnter={() => setShowDetails(true)}
      onMouseOut={() => setShowDetails(false)}
    >
      {showDetails ? (
        <MovieDetailsCard
          title={title}
          rating={rating}
          genreIds={genreIds}
          releaseYear={releaseYear}
          bgImageLink={backdropPath}
        />
      ) : (
        <div className="w-36 md:w-48 pr-4">
          <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
        </div>
      )}
    </div>
  );
};
export default MovieCard;
