import ReactAxiom from "react-axiom";

class Login extends ReactAxiom.Model {
    static defaultState() {
        return {
            username: "",
            password: ""
        };
    }
}
export default Login;