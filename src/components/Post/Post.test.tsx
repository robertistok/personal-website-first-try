import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { useStaticQuery } from "gatsby";

import Post from "./Post";
import siteMetadata from "../../../jest/__fixtures__/site-metadata";

describe("<Post />", () => {
  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockReturnValue(siteMetadata);
  });

  const props = {
    post: {
      id: "test-123",
      html: "<p>test</p>",
      fields: {
        slug: "/test",
        categorySlug: "/test-category",
        tagSlugs: ["/test_0", "/test_1"]
      },
      frontmatter: {
        date: "2016-09-01",
        tags: ["test_0", "test_1"],
        title: "test"
      }
    }
  };

  it("renders", () => {
    shallow(<Post {...props} />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<Post {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
