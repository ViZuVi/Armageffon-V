import React from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {getDate, getDistance, getName, getScale, getSize} from '../../common';
import { ActionCreator } from '../../store/action';

const AsteroidCard = ({asteroid, distanceUnit, isToDestroyPage, onDestroyBtnClick, onDeleteBtnClick, listToDestroy}) => {
  const history = useHistory();

  return (
    <article className={`card${asteroid.is_potentially_hazardous_asteroid ? ` card--danger` : ``}`}>
      <div className={`card__header${asteroid.is_potentially_hazardous_asteroid ? ` card__header--danger` : ``}`}>
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
          {!isToDestroyPage
            ? <div className="assessment">
              <p className="assessment__text">
                Оценка:
                <span className="assessment__value">{asteroid.is_potentially_hazardous_asteroid ? `опасен` : `не опасен`}</span>
              </p>
              {
                listToDestroy.find((el) => (el === asteroid))
                  ? <button className="assessment__button" onClick={() => onDeleteBtnClick(asteroid)}>Добавлено</button>
                  : <button className="assessment__button" onClick={() => onDestroyBtnClick(asteroid)}>На уничтожение</button>
              }
            </div>
            : <div className="assessment">
                <button className="assessment__button" onClick={() => onDeleteBtnClick(asteroid)}>Убрать из списка</button>
              </div>
          }
        </div>
      </div> 
    </article>
  )
}

const mapStateToProps = (state) => ({
  listToDestroy: state.listToDestroy,
})

const mapDispatchToProps = (dispatch) => ({
  onDestroyBtnClick(asteroidData) {
    dispatch(ActionCreator.addToDestroy(asteroidData))
  },
  onDeleteBtnClick(asteroidData) {
    dispatch(ActionCreator.deleteFromDestroy(asteroidData))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AsteroidCard)
