import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showMissions, joinMissions } from '../redux/missions/Missions';
import '../missions.css';

const Missions = () => {
  const state = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showMissions());
  }, []);

  const joinmissionHandler = (e) => {
    const status = e.target.getAttribute('status');
    const id = e.target.getAttribute('id');
    dispatch(joinMissions(id, status));
  };

  return (
    <div>
      <hr />
      <table className="table">
        <thead className="head">
          <tr className="row">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        {state.map((mission) => (
          <tbody key={mission.mission_id}>
            <tr className="row">
              <td>{mission.mission_name}</td>
              <td className="description-td">{mission.description}</td>
              <td className="member">
                {mission.reserved ? (
                  <button type="button" className="btnmember">
                    Active Member
                  </button>
                ) : (
                  <button type="button" className="notmember">
                    Not a Member
                  </button>
                )}
              </td>
              <td className="join">
                {mission.reserved ? (
                  <button
                    type="button"
                    className="leaveMish"
                    status={0}
                    id={mission.mission_id}
                    onClick={joinmissionHandler}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    className="joinMish"
                    status={1}
                    id={mission.mission_id}
                    onClick={joinmissionHandler}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Missions;
