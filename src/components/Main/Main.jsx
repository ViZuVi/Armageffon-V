import React from 'react';
import Header from '../Header/Header';

const Main = () => {
  return (
    <div className="page">
      <Header page='MAIN' />
      <main className="page__main">
        <form className="form" action="" method="GET">
          <div className="form__container form__container--dangerous">
            <input type="checkbox" id="dangerous" />
            <label htmlFor="dangerous">Показать только опасные</label>
          </div>
          <div className="form__container form__container--distance">
            <span>Расстояние </span>
            <input className="visually-hidden" name="distance" type="radio" id="kilometers" />
            <label className="form__distance-radio form__distance-radio--active" htmlFor="kilometers">в километрах, </label>
            <input className="visually-hidden" name="distance" type="radio" id="moon-dist" />
            <label className="form__distance-radio" htmlFor="moon-dist">в дистанциях до луны</label>
          </div>
        </form>
        <section className="cards">
          <article className="card">
            <div className="card__header">
              <img className="card__img card__img--asteroid" src="./img/asteroid.png" alt="asteroid" />
              <img className="card__img card__img--dinosaur" src="./img/dinosaur.svg" alt="dinosaur" />
            </div>
            <div className="card__container">
              <h2 className="card__title">2021 FQ</h2>
              <div className="card__info-container">
                <div className="card__info">
                  <div className="propreties">
                    <span>Дата</span>
                    <span className="propreties__center"></span>
                    <span>12 сентября 2021</span>
                  </div>
                  <div className="propreties">
                    <span>Расстояние</span>
                    <span className="propreties__center"></span>
                    <span>7 235 024 км </span>
                  </div>
                  <div className="propreties">
                    <span>Размер</span>
                    <span className="propreties__center"></span>
                    <span>85 м</span>
                  </div>
                </div>
                <div className="assessment">
                  <p className="assessment__text">
                    Оценка:
                    <span className="assessment__value">не опасен</span>
                  </p>
                  <button className="assessment__button">На уничтожение</button>
                </div>
              </div>
            </div> 
          </article>

          <article className="card card--danger">
            <div className="card__header card__header--danger">
              <img className="card__img card__img--asteroid" src="./img/asteroid.png" alt="asteroid" />
              <img className="card__img card__img--dinosaur" src="./img/dinosaur.svg" alt="dinosaur" />
            </div>
            <div className="card__container">
              <h2 className="card__title">2021 FQ</h2>
              <div className="card__info-container">
                <div className="card__info">
                  <div className="propreties">
                    <span>Дата</span>
                    <span className="propreties__center"></span>
                    <span>12 сентября 2021</span>
                  </div>
                  <div className="propreties">
                    <span>Расстояние</span>
                    <span className="propreties__center"></span>
                    <span>7 235 024 км </span>
                  </div>
                  <div className="propreties">
                    <span>Размер</span>
                    <span className="propreties__center"></span>
                    <span>85 м</span>
                  </div>
                </div>
                <div className="assessment">
                  <p className="assessment__text">
                    Оценка:
                    <span className="assessment__value">опасен</span>
                  </p>
                  <button className="assessment__button">На уничтожение</button>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
      <footer className="footer">
      <p className="footer__text">2021 &copy; Все права и планета защищены</p>
    </footer>
    </div>
  )
}

export default Main
