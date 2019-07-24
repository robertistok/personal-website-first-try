import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Author from "./Author";

describe("<Author />", () => {
  const props = {
    author: {
      name: "test",
      photo: "/photo.jpg",
      bio: "test"
    },
    isIndex: false
  };

  it("renders", () => {
    shallow(<Author {...props} />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<Author {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
