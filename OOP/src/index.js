class People {
    constructor(name, age, nationality, maritalStatus) {
        this._name = name;
        this._age = age;
        this._nationality = nationality;
        this._maritalStatus = maritalStatus;
    }
    
    set name(newName) {
        this._name = newName;
    }

    get name() {
        return this._name;
    }

    getBio() {
        return `${this._name} is ${this._age} from ${this._nationality} and is ${this._mritalStatus}. ${this.regVoter()}`;
    }
}

class Citizen extends People {
    constructor(name, age, nationality) {
        super(this.name);
        
        
    }


    regVoter() {
        if (this.age >= 18) {
            return "You are old enough to vote";
        } else {
            return "You are not old enough to vote"
        }
    }
}