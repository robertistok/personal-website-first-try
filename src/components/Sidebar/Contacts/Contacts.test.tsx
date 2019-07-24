import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Contacts from "./Contacts";

describe("<Contacts />", () => {
  const props = {
    contacts: {
      email: "#",
      twitter: "#",
      vkontakte: "#",
      github: "#",
      rss: "#",
      telegram: "#"
    }
  };
  it("renders", () => {
    shallow(<Contacts {...props} />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<Contacts {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
