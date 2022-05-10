import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket, unreserveRocket } from '../redux/rockets/Rockets';

const RocketElement = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, description, flickrImages, reserved,
  } = props;

  RocketElement.defaultProps = {
    reserved: false,
  };

  const reserveRocketHandler = (e) => {
    if (reserved) {
      dispatch(unreserveRocket(e.target.id));
    } else {
      dispatch(reserveRocket(e.target.id));
    }
  };
  const reservation = reserved ? 'Cancel Reservation' : 'Reserve Rocket';

  return (
    <div className="rocketEl">
      <div className="rocketImg">
        <img src={flickrImages} alt={description} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>
          {(reserved) && (<span className="badge">Reserved</span>)}
          {description}
        </p>
        <button type="button" id={id} onClick={reserveRocketHandler}>{reservation}</button>
      </div>
    </div>
  );
};

RocketElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

export default RocketElement;
