import React from 'react'
import AsteroidCard from '../AsteroidCard/AsteroidCard'

const AsteroidsList = ({asteroids, distanceUnit, isToDestroyPage}) => {
  return (
    asteroids &&
    <section className="cards">
      {asteroids.map((asteroid) => (<AsteroidCard asteroid={asteroid} distanceUnit={distanceUnit} key={asteroid.id} isToDestroyPage={isToDestroyPage} />))}
    </section>
  )
}

export default AsteroidsList
