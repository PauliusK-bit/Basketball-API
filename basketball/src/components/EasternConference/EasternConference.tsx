import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNBATeams } from "../../pages/NBATeamsPage/NBATeamsPageContexProvider";
import { API_URL } from "../../api/config";
import { Link, useNavigate } from "react-router";

const EastTeamsList = () => {
  const { eastTeams, loading } = useNBATeams();

  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;

  const handleNavigate = (teamId: number) => {
    navigate(`/nba/players?teamId=${teamId}`);
  };

  return (
    <div>
      <h2>Rytų konferencijos komandos</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {eastTeams.map((team) => (
          <Card key={team.teamId} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={team.logo}
                alt={team.teamName}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {team.teamName}
                </Typography>
                <Link
                  to={`/players?teamId=${team.teamId}`}
                  style={{ textDecoration: "none" }}
                >
                  Komandos žaidėjai
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EastTeamsList;
