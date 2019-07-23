import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Page from "./Page";

describe("<Page />", () => {
  const props = {
    children: () => <span>test</span>,
    title: "test"
  };

  it("renders", () => {
    shallow(<Page {...props} />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<Page {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
