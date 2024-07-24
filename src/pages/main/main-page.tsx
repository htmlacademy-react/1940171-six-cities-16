import Card from '../../components/main-components/card/card';
import Map from '../../components/main-components/map/map';
import LocationsList from '../../components/main-components/location/locations-list';
import Logo from '../../components/main-components/header/logo';
import Login from '../../components/main-components/header/login';
import { Helmet } from 'react-helmet-async';

type MainProps = {
  cardCount: number;
}

function MainPage({ cardCount }: MainProps): JSX.Element {
  const cardsArray: JSX.Element[] = [];
  for (let i = 0; i < cardCount; i++) {
    cardsArray.push(<Card />);
  }
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <Login />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cardCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" >Popular</li>
                  <li className="places__option" >Price: low to high</li>
                  <li className="places__option">Price: high to low</li>
                  <li className="places__option">Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">

                {cardsArray}

              </div>
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
