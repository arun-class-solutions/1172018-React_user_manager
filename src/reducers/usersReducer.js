const initialState = {
  users: [],
  firstname: "",
  lastname: "",
  username: "",
  email: ""
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case "GET_USERS_SUCCESS": {
      return Object.assign({}, state, {
        users: action.payload
      });
    }

    default: {
      return state;
    }
  }
}

export default usersReducer;
