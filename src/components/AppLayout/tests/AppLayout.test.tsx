import { ReactWrapper } from "enzyme";
import React from "react";
import { mountWithRoute } from "../../../utils/mountHelper";
import AppLayout from "../AppLayout";

let wrapper: ReactWrapper<any>;

describe("App Layout testing", () => {
  beforeEach(() => {
    const { component } = mountWithRoute(
      <AppLayout>
        <div>Hello</div>
      </AppLayout>,
      {},
      { initialRoute: "/", currentPath: "/" }
    );
    wrapper = component;
  });
  it("Should return a component", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("Should contain Heading component", () => {
    expect(wrapper.find("Header").length).toEqual(1);
  });

  it("Should render the children passed to the App Layout", () => {
    expect(wrapper.find(".main-content-wrapper").length).toEqual(1);
  });
});
