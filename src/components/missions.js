import React from 'react';
import { useSelector } from 'react-redux';

function Missions(){
  const state = useSelector(state => state.missions);
  console.log(state);

  return(
    <table>
    <thead>
      <tr>
      <th>Mission</th>
      <th>Description</th>
      <th>Status</th>
      <th></th>
      </tr>
    </thead>
    {state.map(mission => (
      <tbody key={mission.mission_id}>
        <td>{mission.mission_name}</td>
        <td>{mission.description}</td>
        <td><button>not a member</button></td>
        <td><button>join mission</button></td>
      </tbody>
    )
    )}

  </table>
  )
}

   
export default Missions;
