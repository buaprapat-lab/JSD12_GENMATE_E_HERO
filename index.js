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
      `${this.name} is from ${this.multiverse}. Go to ${anothermultiverse} to save the days.`,
    );
    this.multiverse = anothermultiverse;
  }
  gotattacked(attack) {
    this.hp -= attack;
    console.log(
      `${this.name} got attacked ${attack} hp. I currently have ${this.hp} hp.`,
    );
  }
  statusNow() {
    if (this.hp <= 0) {
      console.log(`${this.name} is dead`);
    } else {
      console.log(`${this.name} is alive. ${this.name} currently have ${this.hp} hp. `);
    }
  }
}

class IronTank extends Hero {
  constructor(name, gender, multiverse, hp, attack, armor) {
    super(name, gender, multiverse, hp, attack);
    this.armor = armor;
  }

  gotattacked(power) {
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

class Mage extends Hero {
  constructor(name, gender, multiverse, hp, attack, mana) {
    super(name, gender, multiverse, hp, attack);
    this.mana = mana;
    this.hasResurrected = false;
  }
  castHeal() {
    if (this.hp > 0) {
      this.hp += 20;
      console.log(
        `${this.name} chants an ancient spell. HP restored to ${this.hp}.`,
      );
    }
  }
  gotattacked(attack) {
    this.hp -= attack;
    console.log(
      `CRITICAL HIT! ${this.name} takes ${attack} damage. (Remaining HP: ${this.hp})`,
    );
    if (this.hp <= 0 && !this.hasResurrected) {
      console.log(`[System] Warning: Vital signs dropping...`);
      console.log(
        `[Ultimate] The Ray of Light pierces the sky! ${this.name} is reviving...`,
      );
      this.hp = 50;
      this.hasResurrected = true;
      console.log(
        `${this.name} has returned from the void. HP is restored to ${this.hp}.`,
      );
    } else if (this.hp <= 0 && this.hasResurrected) {
      console.log(
        `${this.name} has fallen in battle. There is no magic left to save her.`,
      );
    }

class Fighter extends Hero {
  constructor(name, gender, multiverse, hp, attack) {
    super(name, gender, multiverse, hp, attack);
  }
  buffpower() {
    this.attack *= 2;
    this.hp += 10;
    console.log(
      `Hehe! Right now ${this.name} is buffed. My attack is twice! ${this.attack} attack Are you ready!!`,
    );
    console.log(`${this.name} is stronger now. My hp is ${this.hp}`);
  }
  debuffpower() {
    this.attack /= 2;
    console.log(
      `Oh no! my superpower has gone to half! just ${this.attack} attack`,
    );
  }
}

class Assassin extends Hero {
  constructor(name, gender, multiverse, hp, attack) {
    super(name, gender, multiverse, hp, attack);
    this.criticalChance = 0.4;
    this.isHidden = false;
    this.evasionChance = 0.3;
  }

  gotattacked(attack) {
    const isEvaded = Math.random() < this.evasionChance;

    if (isEvaded) {
      console.log(
        `[EVADE] ${this.name} Barely dodged the attack just in time! (Damage 0)`,
      );
    } else {
      super.gotattacked(attack);
    }
  }
  hideInShadows() {
    this.isHidden = true;
    console.log(
      `${this.name} has vanished into the shadows! (Next attack will be deadly)`,
    );
  }

  statusNow() {
    super.statusNow();
    if (this.hp > 0 && this.isHidden) {
      console.log(`${this.name} is currently hidden.`);
    }
  }

// ==========================================
// MAIN BATTLE SEQUENCE
// ==========================================


const mage = new Mage("Nami", "Female", "Enchanted Forest", 80, 15, 100);
const fighter = new Fighter("Marty", "Male", "Julong", 200, 100);
const tank = new IronTank("Aegis","Male","Edoha", 500, 150,200);
const assassin = new Assassin("Viper", "Female", "Edoha", 120, 100);
console.log("\n=== ACT I: THE BRAWL IN THE VOID ===");
mage.introduce();
fighter.introduce();
mage.gotattacked(fighter.attack);
fighter.gotattacked(mage.attack);
mage.statusNow();
fighter.statusNow();

console.log("\n=== ACT II: OVERKILL ===");
fighter.buffpower();
mage.gotattacked(fighter.attack);
mage.statusNow();
fighter.debuffpower();
fighter.statusNow();

console.log("\n=== ACT III: WELCOME TO EDOHA ===");
fighter.shiftMultiverse("Edoha");
fighter.introduce();
tank.introduce();
assassin.introduce()
console.log("\n[Aegis blocks the path! Marty attacks!]");
tank.gotattacked(fighter.attack);
tank.statusNow()
tank.gotattacked(fighter.attack);
tank.statusNow();
tank.gotattacked(fighter.attack);
tank.statusNow();
fighter.buffpower();
tank.gotattacked(fighter.attack);
tank.statusNow();
fighter.debuffpower();
fighter.statusNow();
console.log("\n[Viper prepares to strike!]");
assassin.hideInShadows();
console.log("\n[Marty throws a wild punch into the dark!]");
assassin.gotattacked(fighter.attack);
assassin.statusNow();
assassin.gotattacked(fighter.attack);
assassin.statusNow();
fighter.statusNow();
console.log("\n[Marty exhuasted!!]")
fighter.shiftMultiverse("Julong")
fighter.introduce();
