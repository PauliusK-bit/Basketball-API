import { NBATeamItemProps } from "./Types";

const NBATeamItem: React.FC<NBATeamItemProps> = ({ data }) => {
  const { name, logo } = data;

  return (
    <div>
      <h4>{name}</h4>
      <h5>
        <img src={logo} alt="" />
      </h5>
    </div>
  );
};

export default NBATeamItem;
