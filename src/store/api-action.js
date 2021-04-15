import {ActionCreator} from "./action";

export const loadData = () => (dispatch, _getState, api) => {
  api.get()
    .then(({data}) => dispatch(ActionCreator.getData(data.near_earth_objects)))
    .catch(() => {});
};