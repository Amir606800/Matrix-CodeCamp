class chooseCar{
    constructor(name,speed,fuel,money){
        this.name=name
        this.speed = speed
        this.fuel = fuel
        this.money = money
    }

    chosenCar(){
        console.log(`You have chosen your car. \nYour car: ${this.name}\nMax speed: ${this.speed} km/h \nFuel: ${this.fuel} L`);
    }
    refuel(){
        if(this.fuel <100){
            this.fuel+=20;
            this.money-=20
            console.log(`Refueled. Now your car's fuel is ${this.fuel}. It costed 20$`);
        }else{
            console.log(`Max fuel has already reached!`);
        }
    }
    Status(){
        console.log( `Car status.\nMax speed: ${this.speed} km/h \nFuel: ${this.fuel} L`);
        console.log(`Your money: ${this.money} $`)
    }
}

class modify extends chooseCar{
    constructor(name,speed,fuel,money){
        super(name,speed,fuel,money)
        this.modify = {
            "modify1":600,
            "modify2":130,
            "modify3":140,
            "modify4":2500
        }
    }

    ModifyList(){
        console.log(`-modify1: Turbo | Cost: 600$`)
        console.log(`-modify2: Wheel & Tires | Cost: 130$`)
        console.log(`-modify3: Brake | cost: 140$`)
        console.log(`-modify4: NOS | cost: 2500$`)
    }
    addModify(modifyInp = ""){
        if (this.modify[modifyInp]) {
            const cost = this.modify[modifyInp];
            if (this.money >= cost) {
                this.speed += 40;
                this.money -= cost; 
                console.log(`Your car has been modified successfully.`);
                console.log(`Your new speed is: ${this.speed} km/h`);
                console.log(`Your remaining money: ${this.money}$`);
            } else {
                console.log(`You don't have enough money for this modification!`);
            }
        } else {
            console.log("Modification not found!");
        }
    }
}

class competition extends modify{
    constructor(name,speed,fuel,money){
        super(name,speed,fuel,money)
    }

    startRace(opponentList = []){
        
        for (let i = 50; i <= 300; i += 10) {
            opponentList.push(i);
        }
        
        let randomIndex = Math.floor(Math.random() * opponentList.length);
        let opponentSpeed = opponentList[randomIndex];
        
        if(this.fuel>10){
        
        console.log(`Your opponent's speed is ${opponentSpeed}km/h`)

        console.log("Check your browser!")
        let userInput = prompt("Do you want to race(Yes/No)?")

        if(userInput.toLowerCase() == "yes"){ 
            this.fuel-=14;
            console.log("Race is starting!");
            setTimeout(() => {
                if (this.speed > opponentSpeed) {
                    console.log("Congratulations! You have won the race")
                    this.money+=130
                    console.log(`+130$ added to your account. Your balance: ${this.money}$`)
                }else{
                    console.log("You Lost! Try next time");
                }
            }, 2000);
            }else if(userInput.toLowerCase() == "no"){
                console.log("Race is postponed")
            }else{
                console.log("Invalid input!")
            }

        }else{
            console.log(`Youd do not have enough fuel to race! your fuel:${this.fuel}L`)
        }
    }
}
const race = new competition("Camaro",50,50,1000);
race.chosenCar()

