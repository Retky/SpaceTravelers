const urlMissions = 'https://api.spacexdata.com/v3/missions';

export const fetchMission = async () => {
  const missions = [];
  try {
    const res = await fetch(
      urlMissions,
    );
    const data = await res.json();
    Object.entries(data).forEach((mission) => missions.push({ ...mission[1][0], mission_id: mission[0] }));
    return missions;
  } catch (err) {
    return err;
  }
};
