import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import CurrentUserContext from '../../context/CurrentUserContext';
import ProtectedRoute from '../../utils/ProtectedRoute';
import { checkToken, getUserInfo } from '../../utils/MainApi';
import Tooltip from '../Tooltip/Tooltip';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isMenuActvite, setIsMenuActive] = useState(false);
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  const [userData, setUserData] = useState({});
  const [isInfoTooltipMessage, setIsInfoTooltipMessage] = useState({
    image: '',
    caption: ''
  })

  const navigate = useNavigate();

  const handleTooltipOpen = () => {
    setIsTooltipActive(true);
  }

  const handleOpenMenu = () => {
    setIsMenuActive(true);
  };

  const handleCloseMenu = () => {
    setIsMenuActive(false);
    setIsTooltipActive(false);
  };

  const handleCheckToken = useCallback(async () => {
    const jwt = await checkToken()
    if (jwt.valid === true) {
      getUserInfo()
        .then((data) => {
          setUserData(data);
          setIsLoggedIn(true)
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
          handleLogOut();
        });
    } else {
      handleLogOut();
    }
  }, []);

  useEffect(() => {
    handleCheckToken()
  }, [])

  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    setUserData({
      name: '',
      email: '',
    })
  }

  return (
    <main className='app'>
      <CurrentUserContext.Provider value={userData}>
        <Routes>
          {/* <ProtectedRoute path='/movies' isLoggedIn={isLoggedIn} element={
            <Movies
              isMenuActvite={isMenuActvite}
              onOpenMenu={handleOpenMenu}
              onCloseMenu={handleCloseMenu}
            />
          } />
          <ProtectedRoute path='/saved-movies' isLoggedIn={isLoggedIn} element={
            <SavedMovies
              isMenuActvite={isMenuActvite}
              onOpenMenu={handleOpenMenu}
              onCloseMenu={handleCloseMenu}
            />
          } />
          <ProtectedRoute path='/profile' isLoggedIn={isLoggedIn} element={
            <Profile
              isMenuActvite={isMenuActvite}
              onOpenMenu={handleOpenMenu}
              onCloseMenu={handleCloseMenu}
            />
          } /> */}
          <Route
            element={<ProtectedRoute isLoggedIn={isLoggedIn} />}
          >
            <Route path="/movies" element={
              <Movies
                isMenuActvite={isMenuActvite}
                onOpenMenu={handleOpenMenu}
                onCloseMenu={handleCloseMenu}
              />} />
            <Route path="/saved-movies" element={
              <SavedMovies
                isMenuActvite={isMenuActvite}
                onOpenMenu={handleOpenMenu}
                onCloseMenu={handleCloseMenu}
              />} />
            <Route path="/profile" element={
              <Profile
                isMenuActvite={isMenuActvite}
                onOpenMenu={handleOpenMenu}
                onCloseMenu={handleCloseMenu}
                logOut={handleLogOut}
                handleTooltipOpen={handleTooltipOpen}
                setIsInfoTooltipMessage={setIsInfoTooltipMessage}
              />} />
          </Route>
          <Route path="/" element={<Main
            isMenuActvite={isMenuActvite}
            onOpenMenu={handleOpenMenu}
            onCloseMenu={handleCloseMenu}
            isLoggedIn={isLoggedIn}
          />} />
          <Route path="/signup" element={<Register setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} isLoggedIn={isLoggedIn}/>} />
          <Route path="/signin" element={<Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} isLoggedIn={isLoggedIn}/>} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Tooltip
                isTooltipActive={isTooltipActive}
                onClose={handleCloseMenu}
                caption={isInfoTooltipMessage.caption}
                image={isInfoTooltipMessage.image}
            />
      </CurrentUserContext.Provider>
    </main>
  );
}

export default App;
