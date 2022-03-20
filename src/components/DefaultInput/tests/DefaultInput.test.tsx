import React from "react";
import { mount } from "../../../utils/mountHelper";
import DefaultInput from "../DefaultInput";
import { act } from "react-dom/test-utils";

const className = "some-class";
const value = "hello";
const onChangeMock = jest.fn();
const placeholder = "Some placeholder";
describe("DefaultInput Testing", () => {
  it("Should return a component", () => {
    const { component } = mount(
      <DefaultInput className={className} value={value} onChange={onChangeMock} placeholder={placeholder} />
    );
    expect(component.length).toEqual(1);
  });
  it("Should contain input with values passed in props", () => {
    const { component } = mount(
      <DefaultInput className={className} value={value} onChange={onChangeMock} placeholder={placeholder} />
    );
    expect(component.find("input").props().className).toEqual(className);
    expect(component.find("input").props().value).toEqual(value);
    expect(component.find("input").props().placeholder).toEqual(placeholder);
  });
  it("Should call onChange function when triggered", async () => {
    const { component } = mount(
      <DefaultInput className={className} value={value} onChange={onChangeMock} placeholder={placeholder} />
    );
    component.find("input").simulate("change", { target: { value: "qweqwe" } });
    expect(onChangeMock).toHaveBeenCalled();
  });
});
