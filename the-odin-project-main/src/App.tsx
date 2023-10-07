import Course from "components/Course";
import Home from "components/Home";
import NavBar from "components/NavBar";
import Library from "pages/javascript/library/App";
import RestaurantPage from "pages/javascript/restaurant-page/App";
import TicTacToe from "pages/javascript/tic-tac-toe/App";
import TodoList from "pages/javascript/todo-list/App";
import React from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex m-0">
      <NavBar />
      <Switch>
        <Route path={"/library"} component={Library} />
        <Route path={"/tic-tac-toe"} component={TicTacToe} />
        <Route path={"/restaurant-page"} component={RestaurantPage} />
        <Route path={`/course/:course`} component={Course} />
        <Route path={"/todo-list"} component={TodoList} />
        <Route path={`/`} component={Home} />
      </Switch>
    </div>
  );
}

export default App;
