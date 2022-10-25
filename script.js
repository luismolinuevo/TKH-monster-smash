const playerName = prompt("Enter name")
class Fighter {
  constructor(name, healthPoints) {
    this.name = name;
    this.healthPoints = healthPoints;
  }

  attack(enemy) {
    let dmg = randomNum(1, 6);
    enemy.healthPoints = enemy.healthPoints - dmg
    // console.log(dmg)
    alert(`${this.name} attacked ${enemy.name}. ${this.name} did ${dmg} damage to ${enemy.name}. ${enemy.name} has ${enemy.healthPoints} health left`)
  }
}



class Monster extends Fighter {
  constructor(name, healthPoints, type) {
    super(name, healthPoints)
    this.type = type;
  }
}

class Hero extends Fighter {
  constructor(name, healthPoints, power) {
    super(name, healthPoints)
    this.power = power;
  }

}

let mons = new Monster("Mike the Slayer", 15, "Wolf")
let her = new Hero(playerName, 15, "Super Speed")

function randomNum(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) 
}


function playRound() {
  let first = randomNum(0, 2)
  
  if(first == 0){
    her.attack(mons)
    if(mons.healthPoints > 0){
      mons.attack(her)
    }
  }

  else {
    mons.attack(her)
    if(her.healthPoints > 0) {
      her.attack(mons)
    }
  } 
}

function playGame() {
  alert(
    `Hello, ${her.name}! You are fighting ${mons.name}! Your health is at ${her.healthPoints}, ${mons.name}'s health is at ${mons.healthPoints}`
  );

 let roundNumber = 0

  while(her.healthPoints > 0 && mons.healthPoints > 0){
    roundNumber++
   alert(`Round: ${roundNumber}. Hero health is ${her.healthPoints}. Monster health is ${mons.healthPoints}`)

    playRound()
  }
  
  if(her.healthPoints <= 0) {
    alert(`${her.name} won the game`)
  }

  if(mons.healthPoints <= 0) {
    alert(`${mons.name} won the game`)
  }

}

playGame()



