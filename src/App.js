import "./App.css";
import Cards from "./components/Cards/Cards";
import NavBar from "./components/Navbar/Navbar";
import TabNavigator from "./components/TabNavigator/TabNavigator";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App bg-black h-screen ">
        <NavBar />
        <Cards />
        <TabNavigator />
      </div>
    </Router>
  );
}

export default App;
