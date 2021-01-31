import React from "react";
import { shallow } from "enzyme";
import ExamplesCountersSectionsMock from "../../../../__mocks__/ExamplesCountersSectionsMock";
import ExamplesCountersSections from "../../../../components/Singles/ExamplesCountersSections/ExamplesCountersSections";

describe("<ExamplesCountersSections />", () => {
  const examplesCountersSections = shallow(
    <ExamplesCountersSections
      data={ExamplesCountersSectionsMock.data}
      options={ExamplesCountersSectionsMock.options}
    />
  );

  test("ExamplesCountersSections component render", () => {
    expect(examplesCountersSections.length).toEqual(1);
  });
});
