import React from "react";
import { mount } from "enzyme";
import Tools from "../../../../components/Singles/Tools/Tools";

describe("<Tools />", () => {
  const tools = mount(<Tools />);

  test("Tools component render", () => {
    expect(tools.length).toEqual(1);
  });
});