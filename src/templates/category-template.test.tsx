import React from "react";
import { useStaticQuery } from "gatsby";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import CategoryTemplate from "./category-template";
import siteMetadata from "../../jest/__fixtures__/site-metadata";
import allMarkdownRemark from "../../jest/__fixtures__/all-markdown-remark";
import pageContext from "../../jest/__fixtures__/page-context";

describe("<CategoryTemplate />", () => {
  const props = {
    data: {
      ...allMarkdownRemark
    },
    ...pageContext
  };

  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockReturnValue(siteMetadata);
  });

  it("renders", () => {
    shallow(<CategoryTemplate {...props} />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<CategoryTemplate {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
