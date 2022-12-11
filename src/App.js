import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Navbar from "./components/Navbar";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import PageNotFound from "./components/pages/PageNotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


//to start the array of info go into terminal and type "npm run start:dev"
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/user/add" element={<AddUser />}></Route>
          <Route exact path="/user/edit/:id" element={<EditUser />}></Route>
          <Route exact path="/user/:id" element={<User />}></Route>
          <Route exact path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
