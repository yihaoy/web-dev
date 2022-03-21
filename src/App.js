import logo from './logo.svg';
import './App.css';

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './style/index.css'
import './style/explore.css'


import HelloWorld from "./components/hello-world";
import Tuiter from "./components/tuiter/index";
import {BrowserRouter, Route, Routes,Link}
  from "react-router-dom";
import Labs from "./components/labs/index";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen"
import HomeScreen from "./components/tuiter/HomeScreen/HomeScreen"

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/hello"
                   exact={true}
                   element={<HelloWorld/>}/>
            <Route path="/labs"
                   exact={true}
                   element={<Labs/>}/>
            <Route path="/tuiter"
                   exact={true}
                   element={<Tuiter/>}/>
            <Route path="/tuiter/home" element={<HomeScreen/>}/>
            <Route path="/tuiter/explore" element={<ExploreScreen/>}/>

          </Routes>

        </div>
        <Link to="/tuiter">A6 Tuiter home | </Link>
        <Link to="/hello">A6 Hello | </Link>
        <Link to="/labs">A6 Lab</Link>
      </BrowserRouter>
  );
}

export default App;
