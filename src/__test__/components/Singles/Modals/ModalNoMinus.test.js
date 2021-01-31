import React from "react";
import { shallow } from "enzyme";
import ModalNoMinusMock from "../../../../__mocks__/ModalNoMinusMock";
import ModalNoMinus from "../../../../components/Singles/Modals/ModalNoMinus";

describe("<ModalNoMinus />", () => {
  const modalNoMinus = shallow(<ModalNoMinus data={ModalNoMinusMock.data} />);

  test("ModalNoMinus component render", () => {
    expect(modalNoMinus.length).toEqual(1);
  });
});
