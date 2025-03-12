import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNBATeams } from "../../pages/NBATeamsPage/NBATeamsPageContexProvider";

const WesternConferenceTeams = () => {
  const { westTeams, loading } = useNBATeams();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Vakarų konferencijos komandos</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {westTeams.map((team) => (
          <Card key={team.teamId} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={team.logo}
                alt={team.teamName}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {team.teamName}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WesternConferenceTeams;
