import MainPage from '../../pages/main/main-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../utils/const.tsx';
import FavoritePage from '../../pages/favorites/favorites-page.tsx';
import LoginPage from '../../pages/login/login-page.tsx';
import OfferPage from '../../pages/offer/offer-page.tsx';
import NotFoundPage from '../../pages/not-found/not-found-page.tsx';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';

type AppScreenProps = {
  cardCount: number;
}


function App({ cardCount }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider >
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage cardCount={cardCount}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <FavoritePage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider >
  );
}

export default App;
