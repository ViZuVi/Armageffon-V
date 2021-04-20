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
    case ActionType.ADD_TO_DESTROY:
      return {
        ...state,
        listToDestroy: [...state.listToDestroy, action.payload]
      };
    case ActionType.DELETE_FROM_DESTROY:
      const updatedList = state.listToDestroy.slice();
      const removeElement = updatedList.indexOf(action.payload)
      updatedList.splice(removeElement, 1)
      return {
        ...state,
        listToDestroy: updatedList
      };
      default: return state
    }
}