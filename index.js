class Hero {
  constructor(name, gender, multiverse, hp, attack) {
    this.name = name;
    this.gender = gender;
    this.multiverse = multiverse;
    this.hp = hp;
    this.attack = attack;
  }
  introduce() {
    console.log(
      `I'm ${this.name}. I'm ${this.gender}. I'm from ${this.multiverse}.`,
    );
  }
  shiftMultiverse(anothermultiverse) {
    console.log(
      `I'm from ${this.multiverse}. Go to ${anothermultiverse} to save the days.`,
    );
  }
  gotattacked(attack) {
    this.hp -= attack;
    console.log(`I got attacked ${attack} hp. I currently have ${this.hp} hp.`);
  }
  statusNow() {
    if (this.hp <= 0) {
      console.log("I'm dead");
    } else {
      console.log(`I'm alive. I currently have ${this.hp} hp. `);
    }
  }
}

class IronTank {
  constructor(name, hp, armor) {
    this.name = name;
    this.hp = hp;
    this.armor = armor;
  }

  receiveDamage(power) {
    if (this.armor > 0) {
      const oldArmor = this.armor;
      this.armor -= power;

      if (this.armor < 0) {
        this.hp += this.armor;
        this.armor = 0;
      }

      console.log(
        `${this.name} Use your ARMOR to absorb the damage! (Armor: ${oldArmor} -> ${this.armor})`,
      );
    } else {
      this.hp -= power;
      console.log(
        `${this.name} has no armor left! HP is reduced by ${power}. (HP: ${this.hp + power} -> ${this.hp})`,
      );
    }
  }
}

const hero = new IronTank("Soldier Boy", 500, 100);

hero.receiveDamage(30);
hero.receiveDamage(90);
hero.receiveDamage(10);
console.log(hero);
