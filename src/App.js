import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import TabNavigator from "./components/TabNavigator/TabNavigator";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assignments from "./components/Cards/Assignments";
import Resources from "./components/Resources/Resources";

function App() {
  return (
    <Router>
      <div className="app bg-black h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<Assignments />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <TabNavigator />
      </div>
    </Router>
  );
}

export default App;
