class Staff{
    constructor(name,age,experience){
        this.name = name
        this.age = age
        this.experience = experience
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Experience: ${this.experience} years`);
    }

    ageCheck(){
        if(!(this.age<18 && age>55)){
            console.log("Your age matches the requirements")
        }else{
            console.log("Your chances of getting accepted for the job are low.");
            
        }
    }

    experienceCheck(){
        if(this.experience>4){
            console.log("You are an experienced person");
        }else{
            console.log("Not enough experience");
        }
    }
}

class application extends Staff{
    constructor(name,age,experience,salary){
        super(name,age,experience)
        this.salary = salary
    }
    determineSalary() {
        if (this.experience >= 5) {
            this.salary = 5000; 
        } else if (this.experience >= 2) {
            this.salary = 3000; 
        } else {
            this.salary = 1500; 
        }
        console.log("Salary succesfully determined!")
    }

    decision(){
        const last = prompt("Do you accept this application?")
        if(last.toLowerCase() == "yes"){
            console.log(`Congrats your application is succesfull!\nYour salary is ${this.salary}`);
        }else{
            console.log("Your application is denied");
        }
    }
}

const recruitment = new application("Cena",23,2,0)
recruitment.displayDetails()
recruitment.ageCheck()
recruitment.experienceCheck()
console.log("\n")
recruitment.determineSalary()