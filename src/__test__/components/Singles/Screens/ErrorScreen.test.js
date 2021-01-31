import React from "react";
import { mount } from "enzyme";
import ErrorScreen from "../../../../components/Singles/Screens/ErrorScreen";

describe("<ErrorScreen />", () => {
  const errorScreen = mount(<ErrorScreen />);

  test("ErrorScreen component render", () => {
    expect(errorScreen.length).toEqual(1);
  });
});