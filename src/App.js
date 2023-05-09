import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Welcome from "./components/Welcome";
import Trends from "./components/Trends";
import Login from "./components/Login";


function App() {


  return (
  
      <div className="App">
        <Header />
        <div className="body-main">
          <Profile />
          <Welcome />
          <Trends />
        </div>
      </div>
 
  );
}

export default App;
