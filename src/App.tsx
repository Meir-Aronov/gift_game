import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route element={<Outlet/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" />
          <Route path="/about" />
          <Route path="/help" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
