import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const mainPageStyles = {
    marginTop: "55px",
  };
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <Navigation />
        </div>

        <div className="row" style={mainPageStyles}>
          <Routes>
            <Route index element={<Landing></Landing>} />
            <Route path="*" element={<Error></Error>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
