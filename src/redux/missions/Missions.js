import fetchMission from './api';

const GET_MISSION = 'MISSIONS_DISPLAYED';
const MISSION_JOINED = 'MISSION JOINED';
const MISSION_LEFT = 'MISSION LEFT';

const initialState = [];
let store = false;

export default function missionsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MISSION: return action.payload;
    case MISSION_JOINED: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload.id) return mission;
        return { ...mission, reserved: action.payload.status };
      });
      return [...newState];
    }
    case MISSION_LEFT: {
      const newState = state.map((mission) => {
        if (mission.mission_id === action.payload.id) return mission;
        return { ...mission, reserved: action.payload.status };
      });
      return [...newState];
    }

    default: return state;
  }
}

// export const showMissions = () => async (dispatch) => {
//   let missions;
//   try {
//     if (store) return;
//     missions = await fetchMission();
//     dispatch({
//       type: GET_MISSION,
//       payload: missions,
//     });
//     store = true;
//   } catch (err) {
//     return err;
//   }
//   return missions;
// };

export const showMissions = () => async (dispatch) => {
  const missions = await fetchMission();
  if (store) return;
  dispatch({
    type: GET_MISSION,
    payload: missions,
  });
  store = true;
};

export const joinMissions = (id, status) => ({
  type: MISSION_JOINED,
  payload: { id, status: Boolean(Number(status)) },

});
