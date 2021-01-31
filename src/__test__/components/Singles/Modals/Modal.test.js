import React from "react";
import { mount } from "enzyme";
import Modal from "../../../../components/Singles/Modals/Modal";

describe("<Modal />", () => {
  const modal = mount(<Modal />);

  test("Modal component render", () => {
    expect(modal.length).toEqual(1);
  });
});