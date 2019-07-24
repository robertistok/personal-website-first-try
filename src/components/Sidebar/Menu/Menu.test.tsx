import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Menu from "./Menu";

describe("<Menu />", () => {
  const props = {
    menu: [
      {
        label: "Item 0",
        path: "/#0/"
      },
      {
        label: "Item 1",
        path: "/#1/"
      }
    ]
  };

  it("renders", () => {
    shallow(<Menu {...props} />);
  });

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<Menu {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
