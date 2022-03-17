import './vendors/bootstrap/css/bootstrap.min.css';
// import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import logo from './logo.svg';
import './App.css';
import Labs from "./components/labs/index";
import HelloWorld from "./components//hello-world";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/tuiter/HomeScreen/HomeExplore";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/"
                         exact={true}
                         element={<Labs/>}/>
                  <Route path="/labs"
                         exact={true}
                         element={<Labs/>}/>
                  <Route path="/hello"
                         exact={true}
                         element={<HelloWorld/>}/>
                  <Route path="/tuiter/home"
                         exact={true}
                         element={<HomeScreen/>}/>
                  <Route path="/tuiter/explore"
                         exact={true}
                         element={<ExploreScreen/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
