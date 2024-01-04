// *useContext* hook
// React Context is a way to manage state globally.
// It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
// It avoids "Prop Drilling"

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Settings } from "./pages/Settings";
import { Navbar } from "../10.useContext/10.2withuseContext/Navbar";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [userName, setUserName] = useState("Sanga");

  return (
    <div className="App">
      <AppContext.Provider value={{ userName, setUserName }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}
export default App;
