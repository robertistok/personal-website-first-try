import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Copyright from "./Copyright";

describe("<Copyright />", () => {
  const props = { copyright: "test copyright" };

  it("renders", () => {
    shallow(<Copyright {...props} />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<Copyright {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
