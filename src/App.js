import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route element={<HomePage />} path="/" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
