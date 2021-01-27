// Soldier
class Soldier {
    constructor(health,strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health,strength)
        this.name= name;
        this.health = health;
        this.strength = strength;
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health<=0)
        {
            return `${this.name} has died in act of combat`
        }
        return `${this.name} has received ${damage} points of damage`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health<=0)
        {
            return `A Saxon has died in combat`
        }
        return `A Saxon has received ${damage} points of damage`
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let luckySoldier = getRandomInt(this.vikingArmy.length)
        let unluckySoldier = getRandomInt(this.saxonArmy.length)
        this.saxonArmy[unluckySoldier].receiveDamage(this.vikingArmy[luckySoldier].strength)
        if(this.saxonArmy[unluckySoldier].health<=0)
        {
            this.saxonArmy.splice(unluckySoldier,1)
            return 'A Saxon has died in combat'
        }
         
        if(this.saxonArmy[unluckySoldier].health>0){
        return `A Saxon has received ${this.vikingArmy[luckySoldier].strength} of damage`
        }
    }
    saxonAttack(){
        let luckySoldier = getRandomInt(this.saxonArmy.length)
        let unluckySoldier = getRandomInt(this.vikingArmy.length)
        this.vikingArmy[unluckySoldier].receiveDamage(this.saxonArmy[luckySoldier].strength)
        if(this.vikingArmy[unluckySoldier].health<=0)
        {
            this.vikingArmy.splice(unluckySoldier,1)
            return `A Viking has fallen`
           
        }

        if(this.vikingArmy[unluckySoldier].health>0)
        {
            return `${this.vikingArmy[unluckySoldier].name} has received ${this.saxonArmy[luckySoldier].strength} points of damage`
           
        }

    }
    showStatus(){
        if(this.saxonArmy.length==0){
            return 'Vikings have won the war of the century!'
        }
         if (this.vikingArmy.length==0){
            return 'Saxons have fought for their lives and survived another day...'
        }  else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }

}

let gameOver=false;

let defaultSaxon = new Saxon(100,10)
let defaultViking = new Viking('DragonBorn',1000,50)

//Start Game
function playGame(){
while(gameOver==false) {
    let game = new War();

    var audio = document.getElementById("audio");
        audio.play();
    document.getElementById('gameTitle').innerHTML = 'FUS-RO-DAH!!!!!!!!!';
    //Create armies

    document.getElementById('gameBoard').style.width = "80vh";
    document.getElementById('gameBoard').style.height = "60vh";
    document.getElementById('gameBoard').style.backgroundImage = "url(./images/backdrop.png)";
    document.getElementById('gameBoard').style.backgroundRepeat = "no-repeat";
    document.getElementById('gameBoard').style.backgroundSize = "cover";
    
    
    
    for (let i = 0; i<10; i++)
    {
        game.addSaxon(defaultSaxon)
    }

    //create one man army
    game.addViking(defaultViking)
    
    document.getElementById('viking').style.opacity = 100;
    document.getElementById('Saxon').style.opacity = 100;

    
    gameOver=true;
}


}