import React from "react";
import { mount } from "../../../utils/mountHelper";
import StarRating from "../StarRating";

const rating = 3;

describe("StarRating testing", () => {
  it("Should return a component", () => {
    const { component } = mount(<StarRating rating={rating} />);
    expect(component.length).toEqual(1);
  });
  it("Should return 3 stars as active and 2 as inactive", () => {
    const { component } = mount(<StarRating rating={rating} />);
    expect(component.find(".active-star").length).toEqual(3);
    expect(component.find(".inactive-star").length).toEqual(2);
  });
  it("Should return 5 stars as active", () => {
    const { component } = mount(<StarRating rating={5} />);
    expect(component.find(".active-star").length).toEqual(5);
    expect(component.find(".inactive-star").length).toEqual(0);
  });
});
