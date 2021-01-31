import React from "react";
import { shallow } from "enzyme";
import ModalCreateCounterMock from "../../../../__mocks__/ModalCreateCounterMock";
import ModalCreateCounter from "../../../../components/Singles/Modals/ModalCreateCounter";

describe("<ModalCreateCounter />", () => {
  const modalCreateCounter = shallow(
    <ModalCreateCounter counter={ModalCreateCounterMock.counter} />
  );

  test("ModalCreateCounter component render", () => {
    expect(modalCreateCounter.length).toEqual(1);
  });
});
