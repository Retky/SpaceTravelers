import { Provider } from 'react-redux';
import renderer from 'react-test-renderer'
import store from '../redux/configureStore';
import Profile from './my-profile';

describe(' My Profile Component Rendering ', () =>{
    it('renders correctly', () => {
      const tree = renderer.create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
})