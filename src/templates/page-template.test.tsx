import React from "react";
import { useStaticQuery } from "gatsby";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import PageTemplate from "./page-template";
import siteMetadata from "../../jest/__fixtures__/site-metadata";
import markdownRemark from "../../jest/__fixtures__/markdown-remark";

describe("<PageTemplate />", () => {
  const props = {
    data: {
      ...markdownRemark
    }
  };

  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockReturnValue(siteMetadata);
  });

  it("renders", () => {
    shallow(<PageTemplate {...props} />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<PageTemplate {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
