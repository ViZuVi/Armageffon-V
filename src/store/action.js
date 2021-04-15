export const ActionType = {
  GET_DATA: `GET_DATA`,
}

export const ActionCreator = {
  getData: (data) => ({
    type: ActionType.GET_DATA,
    payload: data
  })
}