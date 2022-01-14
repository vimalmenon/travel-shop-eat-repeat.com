import { useFooterHelper } from '@store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Footer } from './Footer.widget';

jest.mock('@store');

describe('common > <PageBase> <Header> <Footer> Component', () => {
  describe('Snapshot Testing', () => {
    it('<Footer>', () => {
      const mock = useFooterHelper as jest.Mock;
      mock.mockImplementation(() => ({
        versionNumber: '0.0.0-D',
      }));
      const wrapper = shallow(<Footer />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
