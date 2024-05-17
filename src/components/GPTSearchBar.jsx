import openai from '../utils/openai';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import { API_OPTIONS } from '../utils/constants';
import { addGPTMovieResult } from '../utils/gptSlice';

const GPTSearchBar = ({ onSearchAttempted }) => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' +
        movie +
        '&include_adult=false&language=en-US&page=1',
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGPTSearchClick = async () => {
    // Make an API call to GPT API and get Movie Results

    const gptQuery =
      'Act as a Movie Recommendation system and suggest some movies for the query : ' +
      searchText.current.value +
      '. only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya';

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');

    // For each movie I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGPTMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );

    onSearchAttempted();
  };

  return (
    <div className="relative top-44 md:top-24 md:left-1/4 mx-2 md:pt-12 flex justify-between">
      <form
        className="w-full  md:w-1/2 bg-black flex"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="w-[80%] mx-2 px-2 md:p-4 my-4 md:mx-4 text-sm md:text-xl"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="w-[20%] m-4 py-2 md:px-4 bg-red-700 text-white rounded-lg text-sm"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GPTSearchBar;
