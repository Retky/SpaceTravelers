import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showMissions } from '../redux/missions/Missions';
import '../missions.css';

function Missions() {
  const state = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showMissions());
  }, []);

  return (
    <div>
    <hr />
    <table className='table'>
      <thead className='head'>
        <tr className='row'>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      {state.map((mission) => (
        <tbody key={mission.mission_id}>
          <tr className='row'>
            <td>{mission.mission_name}</td>
            <td className='description-td'>{mission.description}</td>
            <td className='member'><button type="button">not a member</button></td>
            <td className='join'><button type="button">join mission</button></td>
          </tr>
        </tbody>
      ))}

    </table>
    </div>

  );
}

export default Missions;
