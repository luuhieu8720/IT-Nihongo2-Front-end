import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Signin from "./pages/SignIn";
import PassReset from "./pages/PassReset";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import Showpost from "./pages/Show-post";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={Signin}></Route>
        <Route exact path="/reset-password" component={PassReset}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/showpost" component={Showpost}></Route>
      </Switch>
    </BrowserRouter>
  );
=======
import HomePage from "./pages/HomePage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/signin" component={Signin}></Route>
                <Route exact path="/reset-password" component={PassReset}></Route>
                <Route exact path="/signup" component={Signup}></Route>
                <Route exact path="/" component={Signin}></Route>
                <Route exact path="/homepage" component={HomePage}></Route>
            </Switch>
        </BrowserRouter>
    );
>>>>>>> b5d17bffaf38125f2d49e974ecbe39a24e719b1b
}

export default App;
