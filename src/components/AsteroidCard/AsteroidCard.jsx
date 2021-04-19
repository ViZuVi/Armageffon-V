import React from 'react';
import {useHistory} from 'react-router-dom';
import {getDate, getDistance, getName, getScale, getSize} from '../../common';

const AsteroidCard = ({asteroid, distanceUnit}) => {
  const history = useHistory();

  return (
    <article className="card">
      <div className="card__header">
        <img className="card__img card__img--asteroid" src="./img/asteroid.svg" alt="asteroid" style={{transform: `scale(${getScale(asteroid)})`, transformOrigin: 'bottom'}} />
        <img className="card__img card__img--dinosaur" src="./img/dinosaur.svg" alt="dinosaur" />
      </div>
      <div className="card__container">
        <h2 className="card__title" onClick={() => history.push(`/asteroid/${asteroid.id}`)}>{getName(asteroid.name)}</h2>
        <div className="card__info-container">
          <div className="card__info">
            <div className="propreties">
              <span>Дата</span>
              <span className="propreties__center"></span>
              <span>{getDate(asteroid)}</span>
            </div>
            <div className="propreties">
              <span>Расстояние</span>
              <span className="propreties__center"></span>
              <span>{getDistance(asteroid, distanceUnit)}</span>
            </div>
            <div className="propreties">
              <span>Размер</span>
              <span className="propreties__center"></span>
              <span>{getSize(asteroid)}</span>
            </div>
          </div>
          <div className="assessment">
            <p className="assessment__text">
              Оценка:
              <span className="assessment__value">{asteroid.is_potentially_hazardous_asteroid ? `опасен` : `не опасен`}</span>
            </p>
            <button className="assessment__button">На уничтожение</button>
          </div>
        </div>
      </div> 
    </article>
  )
}

export default AsteroidCard
