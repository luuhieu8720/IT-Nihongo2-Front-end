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
import TutorList from "./pages/TutorList";
import ReportUser from "./pages/ReportUser";
import AddPost from "./pages/AddPost"
import TutorDialog from "./pages/TutorDialog";

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
        <Route exact path="/tutors/list" component={TutorList}></Route>
        <Route exact path="/post/add" component={AddPost}></Route>
        <Route exact path="/admin/reportuser" component={ReportUser}></Route>
        <Route exact path="/tutors/dialog" component={TutorDialog}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
