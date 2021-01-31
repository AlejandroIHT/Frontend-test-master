import React from "react";
import { mount } from "enzyme";
import ModalErrorCreateCounter from "../../../../components/Singles/Modals/ModalErrorCreateCounter";

describe("<ModalErrorCreateCounter />", () => {
  const modalErrorCreateCounter = mount(<ModalErrorCreateCounter />);

  test("ModalErrorCreateCounter component render", () => {
    expect(modalErrorCreateCounter.length).toEqual(1);
  });
});