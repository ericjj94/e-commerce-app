import React from "react";
import { mountWithRoute } from "../../../utils/mountHelper";
import Header from "../Header";

describe("Header testing", () => {
  it("Should return a component", () => {
    const { component } = mountWithRoute(<Header />, {}, { initialRoute: "/", currentPath: "/" });
    expect(component.length).toEqual(1);
  });
  it("Should contain Input component", () => {
    const { component } = mountWithRoute(<Header />, {}, { initialRoute: "/", currentPath: "/" });
    expect(component.find("SearchInput").length).toEqual(1);
  });
  it("Should contain 'View Cart'", () => {
    const { component } = mountWithRoute(<Header />, {}, { initialRoute: "/", currentPath: "/" });
    expect(component.find(".view-cart").length).toEqual(1);
  });
});
