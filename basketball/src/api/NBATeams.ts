import axios from "axios";
import { API_URL } from "./config";

export const fetchEastNBATeams = async () => {
  try {
    const { data } = await axios(`${API_URL}/eastConference`);
    return data;
  } catch {
    console.log(Error);
    throw new Error("Something went wrong");
  }
};

export const fetchWestNBATeams = async () => {
  try {
    const { data } = await axios(`${API_URL}/westConference`);
    return data;
  } catch {
    console.log(Error);
    throw new Error("Something went wrong");
  }
};
