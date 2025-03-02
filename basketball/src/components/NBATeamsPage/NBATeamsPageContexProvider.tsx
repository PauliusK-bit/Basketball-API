import { createContext, useContext, useEffect, useState } from "react";
import {
  NBATeam,
  NBATeamsContextProviderProps,
  NBATeamsPageContextType,
} from "../Types";
import {
  fetchAllNBATeams,
  fetchEastNBATeams,
  fetchWestNbaTeams,
} from "../../api/NBATeams";

const NBATeamsPageContext = createContext<NBATeamsPageContextType | undefined>(
  undefined
);

export const NBATeamsContextProvider: React.FC<
  NBATeamsContextProviderProps
> = ({ children }) => {
  const [teams, setTeams] = useState<NBATeam[]>([]);
  const [eastTeams, setEastTeams] = useState<NBATeam[]>([]);
  const [westTeams, setWestTeams] = useState<NBATeam[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const NBATeamsData = await fetchAllNBATeams();

        if (Array.isArray(NBATeamsData.response)) {
          setTeams(NBATeamsData.response);
        }

        const eastTeamsData = await fetchEastNBATeams();

        if (Array.isArray(eastTeamsData)) {
          setEastTeams(eastTeamsData);
        }

        const westTeamsData = await fetchWestNbaTeams();
        console.log("West teams data:", westTeamsData);
        if (Array.isArray(westTeamsData)) {
          setWestTeams(westTeamsData);
        }
      } catch (error) {
        console.error("Error fetching NBA teams:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const ctxValue: NBATeamsPageContextType = {
    teams,
    eastTeams,
    loading,
    westTeams,
  };

  return (
    <NBATeamsPageContext.Provider value={ctxValue}>
      {children}
    </NBATeamsPageContext.Provider>
  );
};

export const useNBATeams = () => {
  const ctx = useContext(NBATeamsPageContext);

  if (!ctx) {
    throw new Error(
      "useNBATeams cannot be used outside the NBATeamspageContextProvider"
    );
  }

  return ctx;
};
