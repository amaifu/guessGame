function Player(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.level = 1;
    this.stage = 1;
    this.question = 1;

    this.questionIncrement = ()=> {
        this.question++;
    }
}


// Exports Break
export { Player };