class User extends ReactAxiom.Model {
    static defaultState() {
        return {
            id: null,
            username: "",
            name: ""
        };
    }
}