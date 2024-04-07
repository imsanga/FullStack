// *useContext* hook
// React Context is a way to manage state globally.
// It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
// It avoids "Prop Drilling"
// Steps:
// Step 1: Create a context
// Step 2: Provide the context value
// Step 3: Consume the context value

import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import Navbar from "./Navbar";
import { Settings } from "./pages/Settings";

// Step 1: Create a context
export const AppContext = createContext();

function App() {
  const [userName, setUserName] = useState("Sanga");
  return (
    <div className="App">
      {/* Step 2: Provide the context value */}
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
