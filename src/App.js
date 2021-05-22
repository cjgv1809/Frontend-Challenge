import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/R1/Navbar.js";
import ShowTableSection from "./components/R2/ShowTableSection.js";
import ShowModalSection from "./components/R3/ShowModalSection.js";
import ShowInfoSection from "./components/R4/ShowInfoSection.js";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/aboutus">
            <ShowModalSection />
          </Route>
          <Route path="/news">
            <ShowInfoSection />
          </Route>
          <Route exact path="/">
            <ShowTableSection />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
