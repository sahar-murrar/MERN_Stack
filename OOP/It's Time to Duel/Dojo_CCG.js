class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
        this.speed = 3;
        this.strength = 3;
    }
}
class Unit extends Card{
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power;
        console.log(`target res after attack is: ${target.res}`);
    }
}
class Effect extends Card{
    constructor(name, cost, text, state, magnitude) {
        super(name, cost);
        this.text = text;
        this.state = state;
        this.magnitude=magnitude;
    }
    play(target){
        if( target instanceof Unit ) {
            if(this.state == "power"){
                target.power+=this.magnitude;

            }
            else if(this.state == "resilience"){
                target.res+=this.magnitude;
            }
            console.log(`target power after play is:  ${target.power}`);
            console.log(`target res after play is:  ${target.res}`);
           
        } else {
            throw new Error( "Target must be a unit!" );
        }
       
    }
}

const unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4);

const effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience",3);
const effect2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const effect3 = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

effect1.play(unit1);
effect2.play(unit1);
effect3.play(unit1);
unit1.attack(unit2);