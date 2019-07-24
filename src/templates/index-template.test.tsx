import React from "react";
import { useStaticQuery } from "gatsby";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import IndexTemplate from "./index-template";
import siteMetadata from "../../jest/__fixtures__/site-metadata";
import allMarkdownRemark from "../../jest/__fixtures__/all-markdown-remark";
import pageContext from "../../jest/__fixtures__/page-context";

describe("<IndexTemplate />", () => {
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
    shallow(<IndexTemplate {...props} />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<IndexTemplate {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
