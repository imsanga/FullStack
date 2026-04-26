//React Router DOM
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../9.reactRouterDom/pages/Home";
import { Portfolio } from "../9.reactRouterDom/pages/Portfolio";
import { Contact } from "../9.reactRouterDom/pages/Contact";
import { Navbar } from "../9.reactRouterDom/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
