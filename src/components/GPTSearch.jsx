import { useEffect } from 'react';
import { BG_URL, MAXIMUM_GPT_ATTEMPTS } from '../utils/constants';
import GptMovieSuggestions from './GPTMovieSuggestions';
import GptSearchBar from './GPTSearchBar';
import { useState } from 'react';

const GPTSearch = () => {
  const [exhaustedAttempts, setExhaustedAttempts] = useState(
    () => parseInt(localStorage.getItem('EXHAUSTED_ATTEMPTS')) || 0
  );

  useEffect(() => {
    localStorage.setItem('EXHAUSTED_ATTEMPTS', `${exhaustedAttempts}`);
  }, [exhaustedAttempts]);

  const handleSearchAttempt = () => {
    setExhaustedAttempts(exhaustedAttempts + 1);
  };

  const attemptsRemaining = MAXIMUM_GPT_ATTEMPTS - exhaustedAttempts;

  // if (attemptsRemaining === 0) {
  //   classes += '';
  // }

  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="relative">
        {attemptsRemaining > 0 && (
          <GptSearchBar onSearchAttempted={handleSearchAttempt} />
        )}
        {/*  */}
        <div className="bg-black opacity-80 w-2/3 mx-auto p-5 text-white font-bold text-center text-xl flex flex-col align-middle relative top-36">
          <p className="">
            {attemptsRemaining > 0
              ? `Attempts remaining: ${attemptsRemaining}`
              : `You have exhausted all attempts`}
          </p>
          <p className="text-white font-bold text-center mt-5 text-xl">
            Note: Since, this search uses paid OpenAI API, we are restricting
            the attempts to a maximum of 5 searches for each user.
          </p>
        </div>
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;
