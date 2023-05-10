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
import { trendsData } from "./components/trendsData";
import axios from "axios";
import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";

function App() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    axios
      .post("https://reqres.in/api/users", trendsData)
      .then((res) => {
        setTrends(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const values = { trends };

  return (
    <AppContext.Provider value={values}>
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
    </AppContext.Provider>
  );
}

export default App;
