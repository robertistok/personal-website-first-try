import React from "react";
import { useStaticQuery } from "gatsby";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Sidebar from "./Sidebar";
import siteMetadata from "../../../jest/__fixtures__/site-metadata";

describe("<Sidebar />", () => {
  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockReturnValue(siteMetadata);
  });

  it("renders", () => {
    shallow(<Sidebar />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<Sidebar />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
