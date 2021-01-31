import React from "react";
import { mount } from "enzyme";
import WelcomeScreen from "../../../../components/Templates/WelcomeScreen/WelcomeScreen";

describe("<WelcomeScreen />", () => {
  const welcomeScreen = mount(<WelcomeScreen />);

  test("WelcomeScreen component render", () => {
    expect(welcomeScreen.length).toEqual(1);
  });
});
