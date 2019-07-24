import React from "react";
import { useStaticQuery } from "gatsby";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import CategoriesListTemplate from "./categories-list-template";
import siteMetadata from "../../jest/__fixtures__/site-metadata";
import allMarkdownRemark from "../../jest/__fixtures__/all-markdown-remark";

describe("<CategoriesListTemplate />", () => {
  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockReturnValue({ ...siteMetadata, ...allMarkdownRemark });
  });

  it("renders", () => {
    shallow(<CategoriesListTemplate />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<CategoriesListTemplate />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
