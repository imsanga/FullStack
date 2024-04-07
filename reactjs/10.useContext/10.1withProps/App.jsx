import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import Navbar from "./Navbar";
import { Settings } from "./pages/Settings";

function App() {
  const [userName, setUserName] = useState("Sanga");
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home username={userName} />} />
          <Route path="/profile" element={<Profile username={userName} />} />
          <Route path="/contact" element={<Contact username={userName} />} />
          <Route
            path="/settings"
            element={<Settings username={userName} setusername={setUserName} />}
          />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
