import React from 'react'
import { Distance } from '../../const'

const AsteroidCard = ({asteroid, distanceUnit}) => {
  const getName = (fullName) => {
    const regEx = /\((.*?)\)/
    return fullName.match(regEx)[1]
  }

  const getDate = (ateroidData) => {
    const MONTHS = [`Января`, `Февраля`, `Марта`, `Апреля`, `Мая`, `Июня`, `Июля`, `Августа`, `Сентября`, `Октября`, `Ноября`, `Декабря`, ];
    const date = new Date(ateroidData.close_approach_data[0].close_approach_date);
    const formattedDate = `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
    return formattedDate;
  }

  const getDistance = (ateroidData, type) => {
    const distance = ateroidData.close_approach_data[0].miss_distance[type]
    const unit = type === Distance.KILOMETERS
      ? `км`
      : ``
    const formattedDistance = `${Math.round(distance).toLocaleString()} ${unit}`
    return formattedDistance
  }

  const getSize = (ateroidData) => {
    const size = ateroidData.estimated_diameter.meters.estimated_diameter_min
    return `${Math.round(size).toLocaleString()} м`
  }

  const getScale = (ateroidData) => {
    const ASTEROID_SIZE_PER_ONE_DINASAUR = 85
    const scale = ateroidData.estimated_diameter.meters.estimated_diameter_min / ASTEROID_SIZE_PER_ONE_DINASAUR
    return scale;
  };
  
  return (
    <article className="card">
      <div className="card__header">
        <img className="card__img card__img--asteroid" src="./img/asteroid.svg" alt="asteroid" style={{transform: `scale(${getScale(asteroid)})`, transformOrigin: 'bottom'}} />
        <img className="card__img card__img--dinosaur" src="./img/dinosaur.svg" alt="dinosaur" />
      </div>
      <div className="card__container">
        <h2 className="card__title">{getName(asteroid.name)}</h2>
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
