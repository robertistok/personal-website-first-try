import React from "react";
import { useStaticQuery } from "gatsby";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import NotFoundTemplate from "./not-found-template";
import siteMetadata from "../../jest/__fixtures__/site-metadata";

describe("<NotFoundTemplate />", () => {
  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockReturnValue(siteMetadata);
  });

  it("renders", () => {
    shallow(<NotFoundTemplate />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<NotFoundTemplate />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
