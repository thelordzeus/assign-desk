import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import TabNavigator from "./components/TabNavigator/TabNavigator";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assignments from "./components/Cards/Assignments";
import Resources from "./components/Resources/Resources";
import Announcements from "./components/Announcements/Announcements";
import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

function App() {
  async function requestUserPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // generate token
      const token = await getToken(messaging, {
        vapidKey:
          "BFqdbNDYUYZIVu2EVNPkbuW8NjbymhunOfY9su0HTWqJQP27YxYg0LKEdPPdjEk37zXQwqlMA9l-Ugl-Fp0DhVg",
      });
      console.log("token generated", token);
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // request user for permissions
    requestUserPermission();
  }, []);
  return (
    <Router>
      <div className="app bg-black h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<Assignments />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <TabNavigator />
      </div>
    </Router>
  );
}

export default App;
