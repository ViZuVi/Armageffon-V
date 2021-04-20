import React, {useState} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import {Distance} from '../../const';
import AsteroidsList from '../AsteroidsList/AsteroidsList';
import Form from '../Form/Form';

const Main = ({asteroids}) => {
  const [isDangerous, setIsDangerous] = useState(false)
  const [distanceUnit, setDistanceUnit] = useState(Distance.KILOMETERS)

  return (
    <div className="page">
      <Header page='MAIN' />
      <main className="page__main">
        <Form isDangerous={isDangerous} setIsDangerous={setIsDangerous} distanceUnit={distanceUnit} setDistanceUnit={setDistanceUnit} />
        <AsteroidsList asteroids={isDangerous ? asteroids.filter((asteroid) => asteroid.is_potentially_hazardous_asteroid) : asteroids} distanceUnit={distanceUnit} isToDestroyPage={false} />
      </main>
      <footer className="footer">
      <p className="footer__text">2021 &copy; Все права и планета защищены</p>
    </footer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  asteroids: state.asteroids,
});

export default connect(mapStateToProps, null)(Main)
