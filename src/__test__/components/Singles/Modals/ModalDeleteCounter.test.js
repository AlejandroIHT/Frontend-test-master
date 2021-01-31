import React from "react";
import { shallow } from "enzyme";
import ModalDeleteCounterMock from '../../../../__mocks__/ModalDeleteCounterMock';
import ModalDeleteCounter from "../../../../components/Singles/Modals/ModalDeleteCounter";

describe("<ModalDeleteCounter />", () => {
  const modalDeleteCounter = shallow(<ModalDeleteCounter data={ModalDeleteCounterMock} />);

  test("ModalDeleteCounter component render", () => {
    expect(modalDeleteCounter.length).toEqual(1);
  });
});