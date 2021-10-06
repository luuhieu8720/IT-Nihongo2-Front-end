import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Signin from "./pages/SignIn";
import PassReset from "./pages/PassReset";
import Signup from "./pages/Signup";
//import HomePage from "./pages/HomePage";
import Showpost from "./pages/Show-post";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={Signin}></Route>
        <Route exact path="/reset-password" component={PassReset}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        {/* <Route exact path="/" component={HomePage}></Route> */}
        <Route exact path="/showpost" component={Showpost}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
