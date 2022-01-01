import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Header } from './Header.widget';

describe('common > <PageBase> <Header> Component', () => {
  describe('Snapshot Testing', () => {
    it('<Header>', () => {
      const wrapper = shallow(<Header />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
