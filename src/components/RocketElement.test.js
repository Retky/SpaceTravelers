import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import RocketElement from './RocketElement';

const rocket = {
  rocket_id: '654',
  rocket_name: 'Rocket',
  description: 'Lorem',
  flickr_images: ['URL'],
  reserved: false,
};

describe('RocketElement component', () => {
  test('component match with the snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <RocketElement
          key={rocket.rocket_id}
          id={rocket.rocket_id}
          name={rocket.rocket_name}
          description={rocket.description}
          flickrImages={rocket.flickr_images[0]}
          reserved={rocket.reserved}
        />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
