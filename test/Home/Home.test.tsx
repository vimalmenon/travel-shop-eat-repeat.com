import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Home from '../../pages';

describe('pages > <Home> Component', () => {
  describe('Snapshot Testing', () => {
    it('<Home>', () => {
      const wrapper = shallow(
        <Home
          navigation={[]}
          config={{
            appName: 'App Name',
            appDescription: 'App Description',
            titleSeparator: '|',
            version: '0.0.0',
            mode: 'D',
          }}
          navigationList={{}}
        />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
