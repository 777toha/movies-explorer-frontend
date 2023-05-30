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

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isMenuActvite, setIsMenuActive] = useState(false);
  const [userData, setUserData] = useState({});

  const handleOpenMenu = () => {
    setIsMenuActive(true);
  };

  const handleCloseMenu = () => {
    setIsMenuActive(false);
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
              />} />
          </Route>
          <Route path="/" element={<Main
            isMenuActvite={isMenuActvite}
            onOpenMenu={handleOpenMenu}
            onCloseMenu={handleCloseMenu}
            isLoggedIn={isLoggedIn}
          />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </main>
  );
}

export default App;
