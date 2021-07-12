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
        return this.health+=10;
    }
}
class Sensi extends Ninja{
    constructor(name) {
        super(name, 200);
        this.wisdom = 10;
        this.speed = 10;
        this.strength = 10;
    }

    speakWisdom(){
        const message= super.drinkSake();
        console.log(`Wisdom message is: ${ message }`);
    }
}
const ninja1 = new Ninja("sahar", 100);
ninja1.sayName();
ninja1.showState();
console.log("*******************");
// example output
const superSensei = new Sensi("Sahar Murrar");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showState();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
