import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showMissions } from '../redux/missions/Missions';

function Missions() {
  const state = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  console.log(state);

  useEffect(() => {
    dispatch(showMissions());
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th />
        </tr>
      </thead>
      {state.map((mission) => (
        <tbody key={mission.mission_id}>
          <td>{mission.mission_name}</td>
          <td>{mission.description}</td>
          <td><button>not a member</button></td>
          <td><button>join mission</button></td>
        </tbody>
      ))}

    </table>
  );
}

export default Missions;
