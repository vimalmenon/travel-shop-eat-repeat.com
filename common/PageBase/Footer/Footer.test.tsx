import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Footer } from './Footer.widget';

describe('common > <PageBase> <Header> <Footer> Component', () => {
  describe('Snapshot Testing', () => {
    it('<Footer>', () => {
      const wrapper = shallow(<Footer />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
