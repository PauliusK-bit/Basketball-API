import { useEffect, useReducer } from "react";
import { actionTypes, initialState, reducer } from "./euroleagueTeamReducer";
import axios from "axios";
import { API_URL } from "../../api/config";

const EuroleagueTeamsPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { teams, error, loading } = state;

  useEffect(() => {
    const getEuroleagueTeamsData = async () => {
      try {
        dispatch({ type: actionTypes.FETCH });
        const { data } = await axios(`${API_URL}/teams?leagueId=25`);

        console.log(data);

        dispatch({ type: actionTypes.SUCCESS, payload: data });
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
              <h3>{team.name}</h3> <img src={team.logo} alt="" width="50px" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default EuroleagueTeamsPage;
