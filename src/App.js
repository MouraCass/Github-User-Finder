import { AppContainer } from "./components/AppContainer";
import "./Styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="AppName">Github Username Finder</header>
      <div className="AppContent">
        <AppContainer />
      </div>
    </div>
  );
}

export default App;
