import React from "react";
import { shallow } from "enzyme";
import MainScreenMock from "../../../../__mocks__/MainScreenMock";
import MainScreen from "../../../../components/Templates/MainScreen/MainScreen";

describe("<MainScreen />", () => {
  const mainScreen = shallow(
    <MainScreen
      counters={MainScreenMock.counters}
      state={MainScreenMock.state}
      search={MainScreenMock.search}
      modalDeleteCounter={MainScreenMock.modalDeleteCounter}
      modalNoMinus={MainScreenMock.modalNoMinus}
    />
  );

  test("MainScreen component render", () => {
    expect(mainScreen.length).toEqual(1);
  });
});
