import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNBATeams } from "../../pages/NBATeamsPage/NBATeamsPageContexProvider";

const EastTeamsList = () => {
  const { eastTeams, loading } = useNBATeams();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Rytų konferencijos komandos</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {eastTeams.map((team) => (
          <Card key={team.id} sx={{ maxWidth: 345 }}>
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
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EastTeamsList;
