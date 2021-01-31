import React from "react";
import { shallow } from "enzyme";
import ModalExampleCountersMock from "../../../../__mocks__/ModalExampleCountersMock";
import ModalExampleCounters from "../../../../components/Singles/Modals/ModalExampleCounters";

describe("<ModalExampleCounters />", () => {
  const modalExampleCounters = shallow(<ModalExampleCounters state={ModalExampleCountersMock} />);

  test("ModalExampleCounters component render", () => {
    expect(modalExampleCounters.length).toEqual(1);
  });
});
