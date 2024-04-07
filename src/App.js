import Jsx from "./containers/Jsx";
import Databinding from "./containers/Databinding.js";
import Users from './containers/Users'
import {Routes, NavLink, Route} from 'react-router-dom';

function App(){
  return(
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Jsx</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/binding">DataBinding</NavLink>
          </li>
          <li classname="nav-item">
            <NavLink className="nav-link" to="/users">users</NavLink>
          </li>
        </ul>
        </nav> 
      <div className="container">
       <Routes>
         <Route path="/" element={<Jsx />}></Route>
         <Route path="/binding" element={<Databinding />}></Route>
         <Route path="/users" element={<Users />}></Route>
       </Routes>
      </div> 
    </div>
  )
}

export default App;