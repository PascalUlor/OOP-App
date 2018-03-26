export class Population {
    constructor(name) {
        this.name = name;
    }
    
    set name(newName) {
        this.name = newName;
    }

    get name() {
        return this.name;
    }

    export class Citizen extends Population {
        constructor(age = 21, stateOfOrigin = Imo, status = single) {
            super(this.name);
            this.age = age;
            this.stateOfOrigin = stateOfOrigin;
            this.status = status;
        }

        getBio() {
            console.log(`${this.name} is ${this.age} from ${this.stateOfOrigin} and is ${this.status}. ${regVoter}`)
        }

        regVoter() {
            if (this.age >= 18) {
                return "You are old enough to vote";
            } else {
                return "You are not old enough to vote"
            }
        }
    }
}