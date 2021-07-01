import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NoMatchPage from '../NoMatchPage/NoMatchPage';
import '../../blocks/account/account.css';

import {Route, Switch, useLocation} from 'react-router-dom';
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  const [isVisibleMenu, setIsVisibleMenu] = React.useState(false);

  const location = useLocation();
  let header;
  let footer;

  function handleMenuClick() {
    setIsVisibleMenu(!isVisibleMenu);
  }

  if (location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile') {
    if (location.pathname !== '/profile') {
      footer = <Footer />;
    }
    header = <Header onMenuClick={handleMenuClick} />;
  }

  return (
    <>
      {header}

      <main>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/movies">
            <Movies visibleMenu={isVisibleMenu} onMenuClick={handleMenuClick} />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies visibleMenu={isVisibleMenu} onMenuClick={handleMenuClick} />
          </Route>
          <Route path="/profile" component={Profile} />
          <Route path="/signup" component={Register} />
          <Route path="/signin" component={Login} />
          <Route component={NoMatchPage} />
        </Switch>
      </main>

      {footer}
    </>
  )
}

export default App;
