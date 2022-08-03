import logo from "./logo.svg";
import "./App.css";
import { appContext } from "./Context/Appcontext";
import Dashboard from './Components/Dashboard'

function App() {

  const title = "TITLE";
  const username = "USER";
  const activeProfileID = "ID";

  return (
    <appContext.Provider value={{ title, username, activeProfileID }}>
      <Dashboard />
    </appContext.Provider>
  );
}

export default App;
