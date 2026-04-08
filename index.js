class Hero {
    constructor(name,gender,multiverse,hp,attack) {
        this.name = name;
        this.gender = gender;
        this.multiverse = multiverse;
        this.hp = hp;
        this.attack = attack
    }
    introduce() {
        console.log(`I'm ${this.name}. I'm ${this.gender}. I'm from ${this.multiverse}.`);
    }
    shiftMultiverse(anothermultiverse) {
        console.log(`I'm from ${this.multiverse}. Go to ${anothermultiverse} to save the days.`)
    }
    gotattacked(attack) {
        this.hp -= attack;
        console.log(`I got attacked ${attack} hp. I currently have ${this.hp} hp.`)
    }
    statusNow() {
        if (this.hp <= 0) {
            console.log("I'm dead");
        } else {
            console.log(`I'm alive.I currently have ${this.hp} hp. `);
        } 
    }
}

