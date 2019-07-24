import React from "react";
import { useStaticQuery } from "gatsby";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import TagsListTemplate from "./tags-list-template";
import siteMetadata from "../../jest/__fixtures__/site-metadata";
import allMarkdownRemark from "../../jest/__fixtures__/all-markdown-remark";

describe("<TagsListTemplate />", () => {
  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockReturnValue({
      ...siteMetadata,
      ...allMarkdownRemark
    });
  });

  it("renders", () => {
    shallow(<TagsListTemplate />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<TagsListTemplate />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
