import React from "react";
import { mount } from "enzyme";
import ButtonOrange from "../../../../components/Singles/Buttons/ButtonOrange";

describe("<ButtonOrange />", () => {
  const buttonOrange = mount(<ButtonOrange />);

  test("ButtonOrange component render", () => {
    expect(buttonOrange.length).toEqual(1);
  });
});