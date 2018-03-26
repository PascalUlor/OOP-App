class Population {
    constructor(name) {
        this._name = name;
    }
    
    set name(newName) {
        this._name = newName;
    }

    get name() {
        return this._name;
    }
}

class Citizen extends Population {
    constructor(age = 21, stateOfOrigin = Imo, maritalStatus = single) {
        super(this.name);
        this._age = age;
        this._stateOfOrigin = stateOfOrigin;
        this._maritalStatus = maritalStatus;
    }

    getBio() {
        console.log(`${this._name} is ${this._age} from ${this._stateOfOrigin} and is ${this._mritalStatus}. ${this.regVoter()}`)
    }

    regVoter() {
        if (this.age >= 18) {
            return "You are old enough to vote";
        } else {
            return "You are not old enough to vote"
        }
    }
}