import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Home from '../../pages';

describe('pages > <Home> Component', () => {
  describe('Snapshot Testing', () => {
    it('<Home>', () => {
      const wrapper = shallow(<Home navigation={[]} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
