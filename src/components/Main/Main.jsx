import React, {useState} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import {Distance} from '../../const'
import AsteroidsList from '../AsteroidsList/AsteroidsList';

const Main = ({asteroids}) => {
  const [distanceUnit, setDistanceUnit] = useState(Distance.KILOMETERS)
  const [isDangerous, setIsDangerous] = useState(false)
  
  return (
    <div className="page">
      <Header page='MAIN' />
      <main className="page__main">
        <form className="form" action="" method="GET">
          <div className="form__container form__container--dangerous">
            <input type="checkbox" id="dangerous" checked={isDangerous} onChange={() => setIsDangerous(prevState => !prevState)} />
            <label htmlFor="dangerous">Показать только опасные</label>
          </div>
          <div className="form__container form__container--distance">
            <span>Расстояние </span>
            <input className="visually-hidden" name="distance" type="radio" id="kilometers" onChange={() => setDistanceUnit(Distance.KILOMETERS)} />
            <label className={`form__distance-radio${distanceUnit === Distance.KILOMETERS ? ` form__distance-radio--active` : ``}`} htmlFor="kilometers">в километрах, </label>
            <input className="visually-hidden" name="distance" type="radio" id="moon-dist" onChange={() => setDistanceUnit(Distance.LUNAR)} />
            <label className={`form__distance-radio${distanceUnit === Distance.LUNAR ? ` form__distance-radio--active` : ``}`} htmlFor="moon-dist">в дистанциях до луны</label>
          </div>
        </form>
        <AsteroidsList asteroids={isDangerous ? asteroids.filter((asteroid) => asteroid.is_potentially_hazardous_asteroid) : asteroids} distanceUnit={distanceUnit} />
      </main>
      <footer className="footer">
      <p className="footer__text">2021 &copy; Все права и планета защищены</p>
    </footer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  asteroids: state.asteroids,
});

export default connect(mapStateToProps, null)(Main)
