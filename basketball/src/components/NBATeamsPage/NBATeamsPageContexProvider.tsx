import { createContext, useContext, useEffect, useState } from "react";
import {
  NBATeam,
  NBATeamsContextProviderProps,
  NBATeamsPageContextType,
} from "../Types";
import { fetchAllNBATeams, fetchEastNBATeams } from "../../api/NBATeams";

const NBATeamsPageContext = createContext<NBATeamsPageContextType | undefined>(
  undefined
);

export const NBATeamsContextProvider: React.FC<
  NBATeamsContextProviderProps
> = ({ children }) => {
  const [teams, setTeams] = useState<NBATeam[]>([]);
  const [eastTeams, setEastTeams] = useState<NBATeam[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const NBATeamsData = await fetchAllNBATeams();
        // console.log("All teams data:", NBATeamsData);
        if (Array.isArray(NBATeamsData.response)) {
          setTeams(NBATeamsData.response);
        }

        const eastTeamsData = await fetchEastNBATeams();
        console.log("East teams data:", eastTeamsData);
        if (Array.isArray(eastTeamsData)) {
          setEastTeams(eastTeamsData);
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
