import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { PageLayout } from './PageLayout.widget';

describe('common > <PageLayout> Component', () => {
  describe('Snapshot Testing', () => {
    it('<PageLayout>', () => {
      const wrapper = shallow(<PageLayout />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
