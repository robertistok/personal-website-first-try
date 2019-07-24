import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Tags from "./Tags";

describe("Tags", () => {
  const props = {
    tags: ["test_0", "test_1"],
    tagSlugs: ["/test_0", "/test_1"]
  };

  it("renders", () => {
    shallow(<Tags {...props} />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<Tags {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
