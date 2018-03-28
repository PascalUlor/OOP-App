class People {
    constructor(name, age, stateOfOrigin, maritalStatus) {
        this._name = name;
        this._age = age;
        this._stateOfOrigin = stateOfOrigin;
        this._maritalStatus = maritalStatus;
    }
    
    set name(newName) {
        this._name = newName;
    }

    get name() {
        return this._name;
    }
}

class Citizen extends People {
    constructor() {
        super(this.name);
        
        
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