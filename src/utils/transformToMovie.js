export const transformTvToMovie = ({
  original_name,
  first_air_date,
  ...rest
}) => ({
  title: original_name,
  release_date: first_air_date,
  ...rest,
});

export const transformTvsToMovies = (tvs) => tvs.map(transformTvToMovie);
