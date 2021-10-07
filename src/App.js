import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Signin from "./pages/SignIn";
import PassReset from "./pages/PassReset";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/signin" component={Signin}></Route>
                <Route exact path="/reset-password" component={PassReset}></Route>
                <Route exact path="/signup" component={Signup}></Route>
                <Route exact path="/" component={Signin}></Route>
                <Route exact path="/homepage" component={HomePage}></Route>
                <Route exact path="/profile" component={Profile}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
