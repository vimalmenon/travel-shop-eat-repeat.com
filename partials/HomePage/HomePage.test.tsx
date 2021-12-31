import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { HomePage } from './HomePage.widget';

describe('partials > <HomePage> Component', () => {
  describe('Snapshot Testing', () => {
    it('<HomePage>', () => {
      const wrapper = shallow(<HomePage />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
