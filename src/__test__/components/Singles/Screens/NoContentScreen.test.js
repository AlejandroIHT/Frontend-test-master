import React from "react";
import { mount } from "enzyme";
import NoContentScreen from "../../../../components/Singles/Screens/NoContentScreen";

describe("<NoContentScreen />", () => {
  const noContentScreen = mount(<NoContentScreen />);

  test("NoContentScreen component render", () => {
    expect(noContentScreen.length).toEqual(1);
  });
});