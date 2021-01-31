import React from "react";
import { mount } from "enzyme";
import Loader from "../../../../components/Singles/Loaders/Loader";

describe("<Loader />", () => {
  const loader = mount(<Loader />);

  test("Loader component render", () => {
    expect(loader.length).toEqual(1);
  });
});