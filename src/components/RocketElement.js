import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket } from '../redux/rockets/Rockets';

const RocketElement = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, description, flickrImages,
  } = props;

  const reserveRocketHandler = (e) => {
    dispatch(reserveRocket(e.target.id));
  };

  return (
    <div className="rocketEl">
      <div className="rocketImg">
        <img src={flickrImages} alt={description} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <button type="button" id={id} onClick={reserveRocketHandler}>Reserve Rocket</button>
      </div>
    </div>
  );
};

RocketElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

export default RocketElement;
