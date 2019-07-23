import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Pagination from "./Pagination";

describe("<Pagination />", () => {
  const props = {
    prevPagePath: "/page/1",
    nextPagePath: "/page/3",
    hasNextPage: true,
    hasPrevPage: true
  };

  it("renders", () => {
    shallow(<Pagination {...props} />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<Pagination {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
