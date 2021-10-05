import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Signin from "./pages/SignIn";
import PassReset from "./pages/PassReset";
<<<<<<< HEAD
import HomePage from "./pages/HomePage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/signin" component={Signin}></Route>
                <Route exact path="/reset-password" component={PassReset}></Route>
                <Route exact path="/" component={HomePage}></Route>
            </Switch>
        </BrowserRouter>
    );
=======
import Signup from "./pages/Signup";
//import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={Signin}></Route>
        <Route exact path="/reset-password" component={PassReset}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        {/* <Route exact path="/" component={HomePage}></Route> */}
      </Switch>
    </BrowserRouter>
  );
>>>>>>> master
}

export default App;
