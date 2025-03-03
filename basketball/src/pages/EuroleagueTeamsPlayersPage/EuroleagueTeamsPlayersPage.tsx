import { useEffect, useReducer } from "react";
import {
  actionTypes,
  initialState,
  reducer,
} from "./euroleagueTeamsPlayersReducer";
import axios from "axios";
import { API_KEY } from "../../api/NBATeams";

const EuroleagueTeamsPlayersPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { players, error, loading } = state;

  useEffect(() => {
    const getEuroleaguePlayersData = async () => {
      try {
        dispatch({ type: actionTypes.FETCH });
        const { data } = await axios(
          "https://v1.basketball.api-sports.io/players?team=796&season=2024",
          {
            headers: {
              "x-rapidapi-host": "v1.basketball.api-sports.io",
              "x-rapidapi-key": `${API_KEY}`,
            },
          }
        );

        console.log(data.response);

        dispatch({ type: actionTypes.SUCCESS, payload: data.response });
      } catch {
        dispatch({ type: actionTypes.FAIL });
        throw new Error("Something went wrong");
      }
    };

    getEuroleaguePlayersData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>Zalgiris Kaunas players</h1>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <p>{player.name}</p>
            <p>{player.number}</p>
            <p>{player.position}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EuroleagueTeamsPlayersPage;
