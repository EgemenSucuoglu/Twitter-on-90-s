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
    <>
      <AppContext.Provider value={values}>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <div className="home-main">
            <div className="home-header">
              <Header />
            </div>
            <div className="body-main">
              <Route path="/homepage">
                <div className="alt">
                  <div className="home-profil">
                    <Profile />
                  </div>

                  <div className="middle">
                    <CreateTweet />
                    <TweetFeed />
                  </div>
                  <div className="home-trends">
                    <Trends />
                  </div>
                </div>
              </Route>
            </div>
          </div>
        </Switch>
      </AppContext.Provider>
    </>
  );
}

export default App;
