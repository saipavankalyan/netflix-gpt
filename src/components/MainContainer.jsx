import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSearchParams } from 'react-router-dom/dist';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const tvSeries = useSelector((store) => store.tvSeries?.popularTVSeries);

  const [params, setParams] = useSearchParams();

  if (!(movies || tvSeries)) return;

  const mainMovie =
    params.get('filter') && params.get('filter') === 'tvSeries'
      ? tvSeries[0]
      : movies[0];

  const type = params.get('filter') || 'movies';

  const { title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={title} overview={overview} movieID={id} />
      <VideoBackground movieId={id} videoType={type} />
    </div>
  );
};
export default MainContainer;
