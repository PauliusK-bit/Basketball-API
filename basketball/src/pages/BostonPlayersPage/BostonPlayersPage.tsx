import { useSearchParams } from "react-router";

const BostonPlayersPage = () => {
  const [searchParams] = useSearchParams();
  const teamId = searchParams.get("teamId");

  return (
    <div>
      <h2>{teamId}</h2>
    </div>
  );
};

export default BostonPlayersPage;
