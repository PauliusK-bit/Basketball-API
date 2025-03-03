import { useEffect, useReducer } from "react";
import { actionTypes, initialState, reducer } from "./euroleagueTeamReducer";
import axios from "axios";
import { API_KEY } from "../../api/NBATeams";

const EuroleagueTeamsPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { teams, error, loading } = state;

  useEffect(() => {
    const getEuroleagueTeamsData = async () => {
      try {
        dispatch({ type: actionTypes.FETCH });
        const { data } = await axios(
          "https://v1.basketball.api-sports.io/teams?league=120&season=2024",
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
    getEuroleagueTeamsData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div>
        <ul>
          {teams.map((team) => (
            <li key={team.id}>
              {" "}
              <h3>{team.name}</h3> <img src={team.logo} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default EuroleagueTeamsPage;
