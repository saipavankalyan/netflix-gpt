import React from 'react';
import { useParams } from 'react-router-dom';

import VideoBackground from './VideoBackground';
import Header from './Header';

const ShowTrailer = () => {
  const { movieId } = useParams();

  return (
    <>
      <Header />
      <VideoBackground movieId={movieId} muted={false} />
    </>
  );
};

export default ShowTrailer;
