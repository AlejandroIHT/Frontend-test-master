import React from "react";
import { shallow } from "enzyme";
import ToolsShareMock from "../../../../__mocks__/ToolsShareMock";
import ToolsShare from "../../../../components/Singles/Tools/ToolsShare";

describe("<ToolsShare />", () => {
  const toolsShare = shallow(<ToolsShare data={ToolsShareMock.data} />);

  test("ToolsShare component render", () => {
    expect(toolsShare.length).toEqual(1);
  });
});
