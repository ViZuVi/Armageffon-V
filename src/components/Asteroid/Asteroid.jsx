import React from 'react';
import {connect} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { getDate, getDistance, getName, getSize } from '../../common';
import { AppRoute, Distance } from '../../const';

const Asteroid = ({asteroids}) => {
  const {id} = useParams();
  const activeAsteroid = asteroids.find((el) => {
    return el.id === id;
  });

  return (
    <div className="page">
      <div className="header__container">
        <h1 className="page__title">ARMAGGEDON V</h1>
        <Link className="header__main-link" to={AppRoute.MAIN}>На главную</Link>
      </div>
      <h2 className="asteroid__name">{getName(activeAsteroid.name)}</h2>
      <ul className="features">
        <li className="features__item">
          <span>Дата сближения</span>
          <span className="features__center"></span>
          <span>{getDate(activeAsteroid)}</span>
        </li>
        <li className="features__item">
          <span>Расстояние в километрах</span>
          <span className="features__center"></span>
          <span>{getDistance(activeAsteroid, Distance.KILOMETERS)}</span>
        </li>
        <li className="features__item">
          <span>Расстояния до луны</span>
          <span className="features__center"></span>
          <span>{getDistance(activeAsteroid, Distance.LUNAR)}</span>
        </li>
        <li className="features__item">
         <span>Размер</span>
          <span className="features__center"></span>
          <span>{getSize(activeAsteroid)}</span>
        </li>
      </ul>
      <div className="assessment">
        <p className="assessment__text">
          Оценка:
          <span className="assessment__value">{activeAsteroid.is_potentially_hazardous_asteroid ? `опасен` : `не опасен`}</span>
        </p>
        <button className="assessment__button">На уничтожение</button>
      </div>
      <footer className="footer">
        <p className="footer__text">2021 &copy; Все права и планета защищены</p>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  asteroids: state.asteroids,
})

export default connect(mapStateToProps, null)(Asteroid);
