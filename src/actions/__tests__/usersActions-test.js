import backend from "../../config/backend";
import { getUsers } from "../usersActions";

import MockAdapter from "axios-mock-adapter";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);
const mockHttp = new MockAdapter(backend);

describe("Users Actions", () => {
  it("Should create GET_USERS_SUCCESS", () => {
    mockHttp
    .onGet("/")
    .reply(200, [{
      firstname: "Bob"
    }]);

    const store = mockStore();

    store
    .dispatch(getUsers())
    .then(() => {
      expect(store.getActions())
      .toEqual([{ type: "GET_USERS_SUCCESS", payload: [{
        firstname: "Bob"
      }] }]);
    });
  });
});
