import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import About from "./components/about/About";
import { Contact } from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects } from "./components/Projects";
function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <Navigation />
        </div>

        <div className="row">
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
