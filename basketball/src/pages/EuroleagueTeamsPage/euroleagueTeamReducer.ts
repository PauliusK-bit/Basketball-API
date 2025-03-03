import { EuroleagueTeam } from "../../components/Types";

export const enum actionTypes {
  FETCH = "fetch",
  SUCCESS = "success",
  FAIL = "fail",
}

type Action =
  | { type: actionTypes.FETCH }
  | { type: actionTypes.SUCCESS; payload: EuroleagueTeam[] }
  | { type: actionTypes.FAIL };

export const initialState = {
  teams: [] as EuroleagueTeam[],
  error: "",
  loading: false,
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.FETCH:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case actionTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        teams: action.payload,
      };

    case actionTypes.FAIL:
      return {
        ...state,
        loading: false,
        error: "Something went wrong",
      };

    default:
      return state;
  }
};
