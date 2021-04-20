import React from 'react';
import {Distance} from '../../const';

const Form = ({isDangerous, setIsDangerous, distanceUnit, setDistanceUnit}) => {

  return (
    <form className="form" action="" method="GET">
    <div className="form__container form__container--dangerous">
      <input type="checkbox" id="dangerous" checked={isDangerous} onChange={() => setIsDangerous(prevState => !prevState)} />
      <label htmlFor="dangerous">Показать только опасные</label>
    </div>
    <div className="form__container form__container--distance">
      <span>Расстояние </span>
      <input className="visually-hidden" name="distance" type="radio" id="kilometers" onChange={() => setDistanceUnit(Distance.KILOMETERS)} />
      <label className={`form__distance-radio${distanceUnit === Distance.KILOMETERS ? ` form__distance-radio--active` : ``}`} htmlFor="kilometers">в километрах,</label>
      <input className="visually-hidden" name="distance" type="radio" id="moon-dist" onChange={() => setDistanceUnit(Distance.LUNAR)} />
      <label className={`form__distance-radio${distanceUnit === Distance.LUNAR ? ` form__distance-radio--active` : ``}`} htmlFor="moon-dist"> в дистанциях до луны</label>
    </div>
  </form>
  );
};

export default Form;
