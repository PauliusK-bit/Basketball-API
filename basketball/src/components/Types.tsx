import { ReactNode } from "react";

export type NBATeam = {
  id: number;
  name: string;
  logo: string;
  country: {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
};

export type NBATeamsPageContextType = {
  teams: NBATeam[];
  eastTeams: NBATeam[];
  westTeams: NBATeam[];
  loading: boolean;
};

export type NBATeamsContextProviderProps = {
  children: ReactNode;
};

export type NBATeamItemProps = {
  data: NBATeam;
};

export interface EuroleagueTeam {
  id: number;
  name: string;
  logo: string;
}

export interface EuroleaguePlayer {
  id: number;
  name: string;
  number: string;
  position: string;
}
