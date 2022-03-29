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
import ProfileScreen from "./components/tuiter/ProfileScreen";
import HomeScreenTuit from "./components/tuiter/HomeScreen/index";

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

            <Route path="tuiter"
                   element={<Tuiter/>}>
                   <Route index element={<HomeScreenTuit/>}/>
                   <Route path="explore" element={<ExploreScreen/>}/>
                   <Route path="profile" element={<ProfileScreen/>}/>
                    {/* <Route path="notifications"
                                          element={<NotificationScreen/>}/> */}
            </Route>

          </Routes>

        </div>
        <Link to="/tuiter">A7 Tuiter home | </Link>
        <Link to="/hello">A7 Hello | </Link>
        <Link to="/labs">A7 Lab</Link>
      </BrowserRouter>
  );
}

export default App;
