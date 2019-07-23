import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Layout from "./Layout";

describe("<Layout />", () => {
  const props = {
    children: "test",
    description: "test",
    title: "test"
  };

  it("renders", () => {
    shallow(<Layout {...props} />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<Layout {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
