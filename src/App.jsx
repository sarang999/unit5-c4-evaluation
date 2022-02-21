import './App.css';

import { Home } from "./components/home";
import { Navigation } from "./components/Navigation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
   

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Navigation/>}></Route>
      </Routes>
      <Navigation/>
    </div>
  );
};

export default App;