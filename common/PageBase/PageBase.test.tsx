import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { PageBase } from './PageBase.widget';

describe('common > <PageBase> Component', () => {
  describe('Snapshot Testing', () => {
    it('<PageBase>', () => {
      const wrapper = shallow(<PageBase />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
