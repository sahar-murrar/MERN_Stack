// parent Vehicle class
class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`Ninja's name: ${ this.name }`);
    }
    showState() {
        console.log(`Ninja's name: ${ this.name }, strength=  ${ this.strength }, speed= ${ this.speed } and health= ${ this.health }`);
    }
    drinkSake(){
        this.health+=10;
    }
}
const ninja1 = new Ninja("sahar", 100);
ninja1.sayName();
ninja1.showState();
