import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { MetaData } from './MetaData.widget';

describe('common > <MetaData> Component', () => {
  describe('Snapshot Testing', () => {
    it('<MetaData> WITHOUT description', () => {
      const wrapper = shallow(<MetaData title="App Title" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('<MetaData> WITH description', () => {
      const wrapper = shallow(<MetaData title="App Title" description="App description" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
