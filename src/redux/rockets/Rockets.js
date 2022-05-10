import fetchRockets from './api';

const FETCHROCKETS = 'FETCHROCKETS';
const RESERVEROCKET = 'RESERVEROCKET';
const UNRESERVEROCKET = 'UNRESERVEROCKET';
const initialState = [];

export const getRockets = () => async (dispatch) => {
  const newState = await fetchRockets();
  dispatch({
    type: FETCHROCKETS,
    newState,
  });
};

export const reserveRocket = (id) => ({
  type: RESERVEROCKET,
  id,
});

export const unreserveRocket = (id) => ({
  type: UNRESERVEROCKET,
  id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHROCKETS:
      return action.newState;
    case RESERVEROCKET: {
      const valState = state.map((rocket) => {
        if (rocket.rocket_id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      console.log(valState);
      return valState;
    }
    case UNRESERVEROCKET: {
      const valState = state.map((rocket) => {
        if (rocket.rocket_id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
      console.log(valState);
      return valState;
    }
    default:
      return state;
  }
};

export default reducer;
