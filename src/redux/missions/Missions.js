import fetchMission from './api';

const GET_MISSION = 'MISSIONS_DISPLAYED';
const MISSION_JOINED = 'MISSION JOINED';

const initialState = [];

export default function missionsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MISSION: return action.payload;
    case MISSION_JOINED: {
      const newState = state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: true };
      });
      return [...newState];
    } 
    default: return state;
  }
}

export const showMissions = () => async (dispatch) => {
  let missions;
  try {
    missions = await fetchMission();
    dispatch({
      type: GET_MISSION,
      payload: missions,
    });
  } catch (err) {
    return err;
  }
  return missions;
};

export const joinMissions = (id) => ({
  type: MISSION_JOINED,
  id,
})
