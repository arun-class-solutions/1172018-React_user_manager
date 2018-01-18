import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FakeComponent from "../FakeComponent";

configure({ adapter: new Adapter() });

// Test suite for UserList
describe("FakeComponent Test", () => {

  // Spec to check Enzyme snapshot against virtual DOM render of component
  it("Matches generated snapshot", () => {
    expect(shallow(<FakeComponent />)).toMatchSnapshot();
  });

});
