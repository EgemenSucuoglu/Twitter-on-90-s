import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Welcome from "./components/Welcome";
import Trends from "./components/Trends";
import Login from "./components/Login";
import CreateTweet from "./components/CreateTweet";
import TweetFeed from "./components/TweetFeed";
import SignUp from "./components/SignUp";
import { Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-main">
        <Profile />
        <div className="middle-main">
          <Switch>
            <Route exact path="/">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/homepage">
              <CreateTweet />
              <TweetFeed />
            </Route>
          </Switch>
        </div>
        <Trends />
      </div>
    </div>
  );
}

export default App;
