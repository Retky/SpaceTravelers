import React, { useEffect } from 'react';
import './my-profile.css';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/Rockets';

const Profile = () => {
  const dispatch = useDispatch();
  const rocketsList = useSelector((store) => store.rockets);
  const myRockets = rocketsList.filter((rocket) => rocket.reserved === true);
  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <section className="profile">
      <div className="profMissions">
        <h2>My Missions</h2>
        <ul className="my">
          A
        </ul>
      </div>
      <div className="profRockets">
        <h2>My Rockets</h2>
        <ul className="my">
          {myRockets.map((rocket) => (
            <div className="MyReserved" key={rocket.rocket_id}>
              <h3>{rocket.rocket_name}</h3>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
