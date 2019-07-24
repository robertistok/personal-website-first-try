import React from "react";
import { useStaticQuery } from "gatsby";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import PostTemplate from "./post-template";
import siteMetadata from "../../jest/__fixtures__/site-metadata";
import markdownRemark from "../../jest/__fixtures__/markdown-remark";

describe("<PostTemplate />", () => {
  const props = {
    data: {
      ...markdownRemark
    }
  };

  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockReturnValue(siteMetadata);
  });

  it("renders", () => {
    shallow(<PostTemplate {...props} />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<PostTemplate {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
