import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
import App from './components/App/App';
import {loadData} from './store/api-action';
import {createAPI} from './api';

const api = createAPI();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))))

store.dispatch(loadData());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
