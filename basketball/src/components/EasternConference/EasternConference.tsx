import { useNBATeams } from "../NBATeamsPage/NBATeamsPageContexProvider";

const EastTeamsList = () => {
  const { eastTeams, loading } = useNBATeams();

  //   console.log(eastTeams);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Rytų konferencijos komandos</h2>
      <ul>
        {eastTeams.map((team) => (
          <li key={team.id}>
            {team.name} <img src={team.logo} alt="" width={50} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EastTeamsList;
