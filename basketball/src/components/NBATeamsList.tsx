import NBATeamItem from "./NBATeamItem";
import { useNBATeams } from "./NBATeamsPage/NBATeamsPageContexProvider";

const NBATeamsList: React.FC = () => {
  const { teams } = useNBATeams();

  return (
    <>
      <div className="teams-card">
        <div>
          {teams.map((team) => (
            <NBATeamItem key={team.id} data={team} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NBATeamsList;
