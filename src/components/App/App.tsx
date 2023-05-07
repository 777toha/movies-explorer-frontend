import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {

  const [isMenuActvite, setIsMenuActive] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuActive(true);
  };

  const handleCloseMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies
          isMenuActvite={isMenuActvite}
          onOpenMenu={handleOpenMenu}
          onCloseMenu={handleCloseMenu}
        />} />
        <Route path="/saved-movies" element={<SavedMovies
          isMenuActvite={isMenuActvite}
          onOpenMenu={handleOpenMenu}
          onCloseMenu={handleCloseMenu}
        />} />
        <Route path="/profile" element={<Profile
          isMenuActvite={isMenuActvite}
          onOpenMenu={handleOpenMenu}
          onCloseMenu={handleCloseMenu}
        />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
