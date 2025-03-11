import "./App.css";
import EastTeamsList from "./components/EasternConference/EasternConference";
import NBATeamsList from "./components/NBATeamsList";
import { NBATeamsContextProvider } from "./pages/NBATeamsPage/NBATeamsPageContexProvider";
import WesternConferenceTeams from "./components/WesternConference/WesternConferenceTeams";

function App() {
  return (
    <>
      <div>
        <NBATeamsContextProvider>
          {/* <NBATeamsList /> */}
          <div className="east-conference">
            <EastTeamsList />
          </div>
          <WesternConferenceTeams />
        </NBATeamsContextProvider>
      </div>
    </>
  );
}

export default App;
