import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Signin from "./pages/SignIn";
import PassReset from "./pages/PassReset";

function App() {
	return (
        <BrowserRouter>
            <Switch>
		        <Route exact path="/signin" component={ Signin }></Route>
            	<Route exact path="/passreset" component={ PassReset }></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;