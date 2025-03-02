import axios from "axios";
import { NBATeam } from "../components/Types";

const API_KEY = "fdf47b5c520ae3a1c5df57e7fff7406e";

export const fetchAllNBATeams = async () => {
  try {
    const { data } = await axios(
      "https://v1.basketball.api-sports.io/teams?league=12&season=2023-2024",
      {
        headers: {
          "x-rapidapi-host": "v1.basketball.api-sports.io",
          "x-rapidapi-key": `${API_KEY}`,
        },
      }
    );

    return data;
  } catch {
    throw new Error("Something went wrong");
  }
};

const eastConferenceTeamsList = [
  "Boston Celtics",
  "Brooklyn Nets",
  "New York Knicks",
  "Philadelphia 76ers",
  "Toronto Raptors",
  "Chicago Bulls",
  "Cleveland Cavaliers",
  "Detroit Pistons",
  "Indiana Pacers",
  "Milwaukee Bucks",
  "Atlanta Hawks",
  "Charlotte Hornets",
  "Miami Heat",
  "Orlando Magic",
  "Washington Wizards",
];

export const fetchEastNBATeams = async () => {
  try {
    const { data } = await axios(
      "https://v1.basketball.api-sports.io/teams?league=12&season=2023-2024",
      {
        headers: {
          "x-rapidapi-host": "v1.basketball.api-sports.io",
          "x-rapidapi-key": `${API_KEY}`,
        },
      }
    );

    console.log(data);

    const eastTeams = data.response.filter((team: NBATeam) =>
      eastConferenceTeamsList
        .map((teamName) => teamName.toLowerCase())
        .includes(team.name.toLowerCase())
    );

    return eastTeams;
  } catch (error) {
    console.error("Klaida gaunant NBA komandas:", error);
  }
};
