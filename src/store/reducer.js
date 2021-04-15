import { ActionType } from "./action"

const initialState = {
  data: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_DATA:
      console.log(action.payload);
      return {
        ...state,
        data: action.payload
      };
      default: return state
    }
}