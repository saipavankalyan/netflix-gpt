import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const MovieDetailsCard = ({
  title,
  rating,
  genreIds,
  releaseYear,
  bgImageLink,
}) => {
  const movieGenres = useSelector((store) => store.movies.movieGenres);
  const tvGenres = useSelector((store) => store.tvSeries.tvSeriesGenres);
  const genres = [...movieGenres, ...tvGenres];

  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <div className="w-56 h-84 m-4 p-8 scale-150 z-10 text-[0.5rem]">
        <div>
          <img
            className="bg-cover"
            src={IMG_CDN_URL + bgImageLink}
            alt="Movie Details Card"
          />
        </div>
        <div className="bg-black w-full text-white p-4">
          <h1 className="text-[0.75rem]">{title}</h1>
          <p className="text-bold mt-1 text-green-600">{rating}</p>
          <div className="flex my-1 gap-2 flex-wrap">
            {genreIds.map((genreId) => (
              <span key={genreId}>
                {
                  genres.filter((genre) => genre.id === parseInt(genreId))[0]
                    .name
                }
              </span>
            ))}
          </div>
          <p>{releaseYear}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieDetailsCard;
