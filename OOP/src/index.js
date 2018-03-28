class People {
    constructor(name, age, nationality, maritalStatus) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.maritalStatus = maritalStatus;
    }
    

    getBio() {
        return `${this.name} is ${this.age} from ${this.nationality} and is ${this.maritalStatus}.`;
    }
    outPut() {
      console.log(`${this.name} is ${this.age} from ${this.nationality} and is ${this.maritalStatus}.`);
    }
}

class Citizen extends People {
    constructor(name, age, nationality) {
      super(name, age, nationality);
        
        }

  getVoter() {
      return `${this.name} is ${this.age} from ${this.nationality}. ${this.regVoter()}`;
            }
  outPut() {
      console.log(`${this.name} is ${this.age} from ${this.nationality}. ${this.regVoter()}`);
        }

  regVoter() {
        if (this.age >= 18) {
            return "You are old enough to vote";
        } else {
            return "You are not old enough to vote"
        }
    }
}

let victor = new Citizen('Victor', 21, 'Jamaica');
let Nigerian = new People('Dan', 18, 'Nigeria', 'single');
Nigerian.getBio();
victor.getVoter();
Nigerian.outPut();
victor.outPut();