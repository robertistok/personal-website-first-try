import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { useStaticQuery } from "gatsby";

import Author from "./Author";
import siteMetadata from "../../../../jest/__fixtures__/site-metadata";

describe("<Author />", () => {
  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockReturnValue(siteMetadata);
  });

  it("renders", () => {
    shallow(<Author />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<Author />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
