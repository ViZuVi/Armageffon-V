import React from 'react';
import {connect} from 'react-redux'; 
import { Distance } from '../../const';
import AsteroidsList from '../AsteroidsList/AsteroidsList';
import Header from '../Header/Header';

const Destroy = ({listToDestroy}) => {
  return (
    <div className="page">
      <Header page='DESTROY' />
      {
        listToDestroy.length
          ? <div>
              <AsteroidsList asteroids={listToDestroy} isToDestroyPage={true} distanceUnit={Distance.KILOMETERS} />
              <button className="destroy__button">Заказать бигаду им. Брюса Уллиса для уничтожения</button>
            </div>
          : <p>Список для уничтожения пока пуст</p>
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  listToDestroy: state.listToDestroy,
})

export default connect(mapStateToProps, null)(Destroy);
