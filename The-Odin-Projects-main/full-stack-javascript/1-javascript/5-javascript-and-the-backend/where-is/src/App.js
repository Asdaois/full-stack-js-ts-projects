import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignGoogle from "./components/SignGoogle";
import About from "./routes/About";
import CreateLevel from "./routes/CreateLevel";
import PlayLevel from "./routes/PlayLevel";
import "./styles/App.css";

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <NavBar />
        <SignGoogle />
        <h1 className="App-title">WHERE IS???</h1>
      </header>
      <Switch>
        <Route path="/play">
          <PlayLevel />
        </Route>
        <Route path="/create">
          <CreateLevel />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
