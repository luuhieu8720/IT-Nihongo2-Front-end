import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Signin from "./pages/SignIn";
import PassReset from "./pages/PassReset";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import ShowPost from "./pages/ShowPost";
import CheckSignup from "./pages/CheckSignup";
import ChangePassword from "./pages/ChangePassword";
import AddPost from "./pages/AddPost"
import Test from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={Signin}></Route>
        <Route exact path="/password/reset" component={PassReset}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/homepage" component={HomePage}></Route>
        <Route exact path="/user/profile/setting" component={Profile}></Route>
        <Route exact path="/post/show/:id" component={ShowPost}></Route>
        <Route exact path="/verify-code" component={CheckSignup}></Route>
        <Route exact path="/password/change" component={ChangePassword}></Route>
        <Route exact path="/post/add" component={AddPost}></Route>
        <Route exact path="/test" component={Test}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;