import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import {
  addUser,
  clearState as clearUserState,
  removeUser,
} from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import {
  toggleGPTSearchView,
  clearState as clearGptState,
} from '../utils/gptSlice';
import {
  changeLanguage,
  clearState as clearConfigState,
} from '../utils/configSlice';
import { Link, useResolvedPath } from 'react-router-dom/dist';
import { clearState as clearMovieState } from '../utils/moviesSlice';
import { clearState as clearTVSeriesState } from '../utils/tvSeriesSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useResolvedPath();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate('/error');
      });
    dispatch(clearUserState());
    dispatch(clearConfigState());
    dispatch(clearGptState());
    dispatch(clearMovieState());
    dispatch(clearTVSeriesState());
  };

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        if (pathname === '/') {
          navigate('/browse');
        }
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between text-sm md:text-lg">
      <div className="flex flex-col md:flex-row w-1/3 justify-around">
        <Link to={'/'}>
          <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
        </Link>
        <div className="flex text-white gap-24 md:gap-16 my-auto">
          <Link to={'/browse'}>Home</Link>
          <Link to={'/browse?filter=movies'}>Movies</Link>
          <Link to={'/browse?filter=tvSeries'}>TV Shows</Link>
        </div>
      </div>
      {user && (
        <div className="flex p-2 justify-between">
          {showGPTSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGPTSearch ? 'Homepage' : '🔎 GPT Search'}
          </button>
          {/* <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
          /> */}
          <button
            onClick={handleSignOut}
            className="py-2 px-4 mx-4 my-2 bg-red-700 text-white rounded-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
