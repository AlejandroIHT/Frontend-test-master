import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../../../../__mocks__/ProviderMock";
import ModalExampleCounters from "../../../../components/Singles/Modals/ModalExampleCounters";

describe("<ModalExampleCounters />", () => {
  const modalExampleCounters = shallow(
    <ProviderMock>
      <ModalExampleCounters />
    </ProviderMock>
  );

  test("ModalExampleCounters component render", () => {
    expect(modalExampleCounters.length).toEqual(1);
  });
});
