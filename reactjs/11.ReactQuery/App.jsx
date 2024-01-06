// *ReactQuery* -> *useQuery*
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

const queryClient = new QueryClient();

function App() {
  const [userName, setUserName] = useState("Sanga");
  return (
    <div className="App">
      <AppContext.Provider value={{ userName, setUserName }}>
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
      </AppContext.Provider>
    </div>
  );
}
export default App;
