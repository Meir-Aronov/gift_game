import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import Navbar from "./components/navbar/Navbar";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Login from "./components/login/Login";
import Sign_in from "./components/sign_in/Sign_in";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route element={<Outlet/>}>
          <Route path="/" element={<HomePage component={Sign_in} />} />
          <Route path="/login" element={<HomePage component={Login} />}/>
          <Route path="/about" element={<div>Page under construction</div>}/>
          <Route path="/help" element={<div>Page under construction</div>}/>
          <Route path="*" element={<ErrorPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
