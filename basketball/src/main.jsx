import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { BrowserRouter, Route, Routes } from "react-router";
import EastTeamsList from "./components/EasternConference/EasternConference";
import WesternConferenceTeams from "./components/WesternConference/WesternConferenceTeams";
import { NBATeamsContextProvider } from "./components/NBATeamsPage/NBATeamsPageContexProvider";
import ProjectNavigation from "./components/ProjectNavigation/ProjectNavigation";
import EuroleagueTeamsPage from "./pages/EuroleagueTeamsPage/EuroleagueTeamsPage";
import EuroleagueTeamsPlayersPage from "./pages/EuroleagueTeamsPlayersPage/EuroleagueTeamsPlayersPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NBATeamsContextProvider>
      <BrowserRouter>
        <ProjectNavigation />
        <Routes>
          <Route path="nba">
            <Route index element={<h1>NBA teams</h1>} />
            <Route path="east" element={<EastTeamsList />} />
            <Route path="west" element={<WesternConferenceTeams />} />
          </Route>
          <Route path="europe">
            <Route index element={<h1>Europe</h1>} />
            <Route path="euroleague" element={<EuroleagueTeamsPage />} />
            <Route path="players" element={<EuroleagueTeamsPlayersPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NBATeamsContextProvider>
  </StrictMode>
);
