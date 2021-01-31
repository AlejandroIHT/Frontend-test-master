import React from "react";
import { shallow } from "enzyme";
import ModalErrorDeleteMock from "../../../../__mocks__/ModalErrorDeleteMock";
import ModalErrorDelete from "../../../../components/Singles/Modals/ModalErrorDelete";

describe("<ModalErrorDelete />", () => {
  const modalErrorDelete = shallow(
    <ModalErrorDelete data={ModalErrorDeleteMock} />
  );

  test("ModalErrorDelete component render", () => {
    expect(modalErrorDelete.length).toEqual(1);
  });
});
