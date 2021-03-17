export const CourcersReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT":
      return [...action.payload];
    case "ADD_COURSE":
      return [...action.payload];
    case "UPDATE_COURSE":
      return [...action.payload];
    case "DELETE_COURSE":
      return [...action.payload];
    default:
      return state;
  }
};
