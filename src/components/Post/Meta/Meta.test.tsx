import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Meta from "./Meta";

describe("<Meta />", () => {
  const props = {
    date: "2016-09-01"
  };

  it("renders", () => {
    shallow(<Meta {...props} />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<Meta {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
