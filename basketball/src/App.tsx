import "./App.css";
import EastTeamsList from "./components/EasternConference/EasternConference";
import NBATeamsList from "./components/NBATeamsList";
import { NBATeamsContextProvider } from "./components/NBATeamsPage/NBATeamsPageContexProvider";

function App() {
  return (
    <>
      <>
        <NBATeamsContextProvider>
          {/* <NBATeamsList /> */}
          <EastTeamsList />
        </NBATeamsContextProvider>
      </>
    </>
  );
}

export default App;
