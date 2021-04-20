export const ActionType = {
  GET_DATA: `GET_DATA`,
  ADD_TO_DESTROY: `ADD_TO_DESTROY`,
  DELETE_FROM_DESTROY: `DELETE_FROM_DESTROY`,
}

export const ActionCreator = {
  getData: (data) => ({
    type: ActionType.GET_DATA,
    payload: data
  }),

  addToDestroy: (asteroid) => ({
    type: ActionType.ADD_TO_DESTROY,
    payload: asteroid,
  }),

  deleteFromDestroy: (asteroid) => ({
    type: ActionType.DELETE_FROM_DESTROY,
    payload: asteroid,
  })
}
