const initialState = {
  users: [],
  firstname: "",
  lastname: "",
  username: "",
  email: ""
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}

export default usersReducer;
