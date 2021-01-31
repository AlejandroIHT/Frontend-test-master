import React from "react";
import { shallow } from "enzyme";
import SearchMock from "../../../../__mocks__/SearchMock";
import Search from "../../../../components/Singles/Searchs/Search";

describe("<Search />", () => {
  const search = shallow(<Search value={SearchMock.value} />);

  test("Search component render", () => {
    expect(search.length).toEqual(1);
  });
});
