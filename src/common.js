import {Distance} from "./const";

export const getName = (fullName) => {
  const regEx = /\((.*?)\)/
  return fullName.match(regEx)[1]
}

export const getDate = (ateroidData) => {
  const MONTHS = [`Января`, `Февраля`, `Марта`, `Апреля`, `Мая`, `Июня`, `Июля`, `Августа`, `Сентября`, `Октября`, `Ноября`, `Декабря`, ];
  const date = new Date(ateroidData.close_approach_data[0].close_approach_date);
  const formattedDate = `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
  return formattedDate;
}

export const getDistance = (ateroidData, type) => {
  const distance = ateroidData.close_approach_data[0].miss_distance[type]
  const unit = type === Distance.KILOMETERS
    ? `км`
    : ``
  const formattedDistance = `${Math.round(distance).toLocaleString()} ${unit}`
  return formattedDistance
}

export const getSize = (ateroidData) => {
  const size = ateroidData.estimated_diameter.meters.estimated_diameter_min
  return `${Math.round(size).toLocaleString()} м`
}

export const getScale = (ateroidData) => {
  const ASTEROID_SIZE_PER_ONE_DINASAUR = 85
  const scale = ateroidData.estimated_diameter.meters.estimated_diameter_min / ASTEROID_SIZE_PER_ONE_DINASAUR
  return scale;
};