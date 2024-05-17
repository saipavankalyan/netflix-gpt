import React from 'react';
import { useParams } from 'react-router-dom';

import VideoBackground from './VideoBackground';
import Header from './Header';
import { useSearchParams } from 'react-router-dom/dist';

const ShowTrailer = () => {
  const { id: movieId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const videoType = searchParams.get('filter') || 'movies';

  return (
    <>
      <Header />
      <VideoBackground videoType={videoType} movieId={movieId} muted={false} />
    </>
  );
};

export default ShowTrailer;
