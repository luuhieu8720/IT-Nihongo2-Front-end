import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signin from "./pages/SignIn";
import './App.css';

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
