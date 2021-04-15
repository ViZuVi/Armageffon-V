import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const Header = ({page}) => {
  return (
    <header className="header">
        <div className="header__description">
          <h1 className="page__title">ARMAGGEDON V</h1>
          <p className="page__info">Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</p>
        </div>
        <nav className="page__nav">
          <Link className={`page__nav-item${page === `MAIN` ? ` page__nav-item--active` : ``}`} to={AppRoute.MAIN}>Астероиды</Link>
          <Link className={`page__nav-item${page === `DESTROY` ? ` page__nav-item--active` : ``}`} to={AppRoute.DESTROY}>Уничтожение</Link>
        </nav>
      </header>
  )
}

export default Header
