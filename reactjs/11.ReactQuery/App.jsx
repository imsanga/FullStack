// *ReactQuery* -> *useQuery*
//step 1: create a client
//step 2: provide the client to ur app
//step 3: fetch the data using useQuery

import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Settings } from "./pages/Settings";
import { Navbar } from "./Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

//step 1: create a client
const queryClient = new QueryClient();

function App() {
  const [userName, setUserName] = useState("Sanga");
  return (
    <div className="App">
      {/* //step 2: provide the client to ur app */}
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </div>
  );
}
export default App;
