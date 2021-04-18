import React from 'react'
import AsteroidCard from '../AsteroidCard/AsteroidCard'

const AsteroidsList = ({asteroids, distanceUnit}) => {
  return (
    <section className="cards">
      {asteroids.map((asteroid) => (<AsteroidCard asteroid={asteroid} distanceUnit={distanceUnit} key={asteroid.id} />))}
    </section>
  )
}

export default AsteroidsList
