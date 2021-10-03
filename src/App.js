import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Signin from "./pages/SignIn";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={Signin}></Route>
      </Switch>
      <Switch>
        <Route exact path="/signup" component={Signup}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
