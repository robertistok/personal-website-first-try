import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { useStaticQuery, StaticQuery } from "gatsby";

import Comments from "./Comments";
import siteMetadata from "../../../../jest/__fixtures__/site-metadata";

describe.only("<Comments />", () => {
  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockReturnValue(siteMetadata);
  });

  const props = {
    postTitle: "test",
    postSlug: "/test"
  };

  it("renders", () => {
    shallow(<Comments {...props} />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<Comments {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
