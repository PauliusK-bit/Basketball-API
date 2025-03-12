import { ReactNode } from "react";

export type NBATeam = {
  id: string;
  teamName: string;
  logo: string;
  city: string;
  arena: string;
  arenaImage: string;
  teamId: number;
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

export interface Country {
  name: string;
  code: string;
  flag: string;
}

export interface CountryProps {
  data: Country;
}
