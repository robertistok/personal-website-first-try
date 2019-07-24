import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Content from "./Content";

describe("<Content />", () => {
  const props = {
    title: "test",
    body: "<p>test</p>"
  };

  it("renders", () => {
    shallow(<Content {...props} />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<Content {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
