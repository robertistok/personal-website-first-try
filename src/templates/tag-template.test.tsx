import React from "react";
import { useStaticQuery } from "gatsby";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import TagTemplate from "./tag-template";
import siteMetadata from "../../jest/__fixtures__/site-metadata";
import allMarkdownRemark from "../../jest/__fixtures__/all-markdown-remark";
import pageContext from "../../jest/__fixtures__/page-context";

describe("<TagTemplate />", () => {
  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockReturnValue(siteMetadata);
  });

  const props = {
    data: { ...allMarkdownRemark },
    ...pageContext
  };

  it("renders", () => {
    shallow(<TagTemplate {...props} />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<TagTemplate {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
