import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App Testing", () => {
  it("Should return a component", () => {
    const component = shallow(<App />);
    expect(component.length).toEqual(1);
  });
});
