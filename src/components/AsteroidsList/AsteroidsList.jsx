import React from 'react';
import AsteroidCard from '../AsteroidCard/AsteroidCard';
import LazyLoad from 'react-lazyload';

const AsteroidsList = ({asteroids, distanceUnit, isToDestroyPage}) => {
  return (
    asteroids &&
    <section className="cards">
        {asteroids.map((asteroid) => (
          <LazyLoad height={200} once key={asteroid.id}>
            <AsteroidCard asteroid={asteroid} distanceUnit={distanceUnit} isToDestroyPage={isToDestroyPage} />
          </LazyLoad>
        ))}
    </section>
  )
}

export default AsteroidsList
