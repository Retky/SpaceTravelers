const urlMissions = 'https://api.spacexdata.com/v3/missions';

export const fetchMission = async () => {
  try {
    const res = await fetch(urlMissions);
    const missions = await res.json();
    if (res.ok) {
      return missions;
    }
  } catch (error) {
    return console.log(error.message);
  }
};
