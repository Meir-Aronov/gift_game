import {Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homePage/HomePage';
import Navbar from './components/windows/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
