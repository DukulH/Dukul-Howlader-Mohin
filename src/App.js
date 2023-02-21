import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {
  return (
    <SkeletonTheme baseColor="#black" highlightColor="#444">
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard/>}>
          </Route>
          <Route path="/about"></Route>
          <Route path="/users"></Route>
        </Routes>
      </Router>
    </div>
    </SkeletonTheme>
  );
}

export default App;
