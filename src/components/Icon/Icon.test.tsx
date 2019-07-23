import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Icon from "./Icon";

describe("<Icon />", () => {
  const props = {
    icon: {
      viewBox: "0 0 0 0",
      path: ""
    }
  };

  it("renders", () => {
    shallow(<Icon {...props} />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<Icon {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
