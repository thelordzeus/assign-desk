import "./App.css";
import Cards from "./components/Cards/Cards";
import NavBar from "./components/Navbar/Navbar";
import TabNavigator from "./components/TabNavigator/TabNavigator";

function App() {
  return (
    <div className="App bg-black h-screen ">
      <NavBar />
      <Cards />
      <TabNavigator />
    </div>
  );
}

export default App;
