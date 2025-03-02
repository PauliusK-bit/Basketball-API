import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { BrowserRouter, Route, Routes } from "react-router";
import EastTeamsList from "./components/EasternConference/EasternConference";
import WesternConferenceTeams from "./components/WesternConference/WesternConferenceTeams";
import { NBATeamsContextProvider } from "./components/NBATeamsPage/NBATeamsPageContexProvider";
import ProjectNavigation from "./components/ProjectNavigation/ProjectNavigation";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NBATeamsContextProvider>
      <BrowserRouter>
        <ProjectNavigation />
        <Routes>
          <Route path="nba">
            <Route index element={<h1>NBA teamas</h1>} />
            <Route path="east" element={<EastTeamsList />} />
            <Route path="west" element={<WesternConferenceTeams />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NBATeamsContextProvider>
  </StrictMode>
);
