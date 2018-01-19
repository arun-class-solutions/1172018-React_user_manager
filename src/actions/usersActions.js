import backend from "../config/backend";

export const getUsers = () => {
  return (dispatch) => {
    // Inside the "thunk"
    // Make an AJAX GET request to MyAPI endpoint
    return backend
    .get("/")
    .then((response) => {
      // Set the array from the API to the state so we can iterate over the users and display them on the UI
      dispatch({
        type: "GET_USERS_SUCCESS",
        payload: response.data
      });
    });
  }
}
