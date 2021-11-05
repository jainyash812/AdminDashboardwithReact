import "./app.css";
import "./responsive.css";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import UserEdit from "./pages/userEdit/UserEdit";
import NewUser from "./pages/newUser/NewUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <UserEdit />
          </Route>
          <Route path="/newUser/">
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
