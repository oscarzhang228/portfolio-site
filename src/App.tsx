import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Landing />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
