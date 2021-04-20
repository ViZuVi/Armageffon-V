import React from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { getDate, getDistance, getName, getSize } from '../../common';
import {Distance } from '../../const';
import { ActionCreator } from '../../store/action';

const Asteroid = ({asteroids, onDestroyBtnClick, onDeleteBtnClick, listToDestroy}) => {
  const history = useHistory();
  const {id} = useParams();
  const activeAsteroid = asteroids.find((el) => {
    return el.id === id;
  });

  return (
    <div className="page">
      <div className="header__container">
        <h1 className="page__title">ARMAGGEDON V</h1>
        <button className="header__main-link" onClick={(evt) => {
          evt.preventDefault();
          history.goBack();
        }}>Назад</button>
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
        {
          listToDestroy.find((el) => (el === activeAsteroid))
            ? <button className="assessment__button" onClick={() => onDeleteBtnClick(activeAsteroid)}>Добавлено</button>
            : <button className="assessment__button" onClick={() => onDestroyBtnClick(activeAsteroid)}>На уничтожение</button>
        }
      </div>
      <footer className="footer">
        <p className="footer__text">2021 &copy; Все права и планета защищены</p>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  asteroids: state.asteroids,
  listToDestroy: state.listToDestroy
})

const mapDispatchToProps = (dispatch) => ({
  onDestroyBtnClick(asteroidData) {
    dispatch(ActionCreator.addToDestroy(asteroidData))
  },
  onDeleteBtnClick(asteroidData) {
    dispatch(ActionCreator.deleteFromDestroy(asteroidData))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Asteroid);
