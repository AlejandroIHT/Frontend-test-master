import React from "react";
import { mount } from "enzyme";
import ModalInModal from "../../../../components/Singles/Modals/ModalInModal";

describe("<ModalInModal />", () => {
  const modalInModal = mount(<ModalInModal />);

  test("ModalInModal component render", () => {
    expect(modalInModal.length).toEqual(1);
  });
});