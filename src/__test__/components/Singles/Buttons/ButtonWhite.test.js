import React from "react";
import { mount } from "enzyme";
import ButtonWhite from "../../../../components/Singles/Buttons/ButtonWhite";

describe("<ButtonWhite />", () => {
  const buttonWhite = mount(<ButtonWhite />);

  test("ButtonWhite component render", () => {
    expect(buttonWhite.length).toEqual(1);
  });
});