import React from "react";
import { mount } from "enzyme";
import Counter from "../../../../components/Singles/Counters/Counter";

describe("<Counter />", () => {
  const counter = mount(<Counter />);

  test("Counter component render", () => {
    expect(counter.length).toEqual(1);
  });
});