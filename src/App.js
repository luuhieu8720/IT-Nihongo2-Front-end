import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Signin from "./pages/SignIn";

function App() {
	return (
        <BrowserRouter>
            <Switch>
            	<Route exact path="/signin" component={ Signin }></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
