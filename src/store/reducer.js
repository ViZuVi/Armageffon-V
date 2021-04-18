import {ActionType} from "./action"

const initialState = {
  asteroids: [],
  listToDestroy: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_DATA:
      const asteroidsArrays = Object.values(action.payload);
      let asteroids = []
      asteroidsArrays.forEach((asteroid) => (asteroids.push(...asteroid)))
      return {
        ...state,
        asteroids: asteroids
      };
      default: return state
    }
}