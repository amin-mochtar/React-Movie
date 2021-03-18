import React from "react";
import { MovieState } from "./Context/MovieContext";
import Main from "./components/Main/Main";
// import {Route, Switch} from "react-router-dom"
import "./App.css";

const App = () => {
  return (
    <MovieState>
        {/* <Route path="/" component={Hero} exact /> */}
        {/* <Route path="/movie/:id" component={MovieDetail} /> */}
        <Main />
    </MovieState>
  );
};

export default App;
