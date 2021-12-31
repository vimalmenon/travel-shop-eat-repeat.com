import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Home from "../../pages";

describe("<Home> Component", () => {
  describe("Snapshot Testing", () => {
    it("<Home>", () => {
      const wrapper = shallow(<Home />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
