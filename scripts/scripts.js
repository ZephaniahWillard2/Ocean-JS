//  Task 1: Implement a function that calculates total fish caught
//          The function calculateFishCaught is going to create an array called totalFish. The function will take a variable,
//          called dailyFishCaught, loop through and add together each value of dailyFishCaught and store the calculations 
//          in the array total Fish.

function calculateFishCaught (totalFish){
    let total = 0;
    totalFish.array.forEach(dailyFishCaught => {
        total += dailyFishCaught;
        // 0 += 50 <- 50 is new total
        // 50 += 75 <- 125 is new total
        
        
    });
}

let weekendFishCaught = [50, 75, 25];                                   //weekendFishCaught and weekdayFishCaught are arrays with how much   
let weekdayFishCaught = [100, 60, 40, 100];                             //fish was caught. totalWeekendFish is a variable equal to the
let totalWeekendFishCaught = calculateFishCaught(weekendFishCaught);    //calcualation of weekendFishCaught being placed into the 
console.log("Total weekend fish caught:", totalWeekendFishCaught);      //function calculateFishCaught, which is then being displayed in the console.

//  task 2: Implement function to filter out endangered fish from fish options
            //fishOptions is an array filled with objects. The objects have key value pairs of "name" and "endangered" respectively.
            //The function filterEndangeredFish loops through the array fishOptions and returns the not endangered fish from the 
            //objects in the fishOptions array.
            
function filterEndangeredFish(fishOptions){
    return fishOptions.filter(option => !option.endangered);
}

let fishOptions = [
    { name: "Salmon", endangered: false},
    {name: "Bluefin Tuna", endangered: true},
    {name: "Cod", endangered: false}
];

//  Task 3: Define a class for Research Institutes
            //We defined a class called ResearchInstitutes with properties instituteName, location, specialty, and size. 

class ResearchInstitutes{
    constructor(instituteName, location, specialty, size){
        this.name = instituteName;
        this.location = location;
        this.specialty = specialty;
        this.size = size;
    }
}

//  Task 4: Extend the ResearchInstitute class for MarineResearchInstitute
            //We created a sub-class that extends the ResearchInstitute class called MarineResearchInstitute with the same properties
            //as the ResearchInstitutes class and added in "climate" as a property. we used "super" to indicate which properties
            //the sub class MarineResearchInstitutes were going to inherit from its super class ResearchInstitutes.

class MarineResearchInstitute extends ResearchInstitutes{
    constructor(instituteName, location, specialty, size, waterLocation, climate){
        super(instituteName, location, specialty, size)
        this.waterLocation = waterLocation;
        this.climate = climate;
    }
}

// Task 5: Implement a class with default parameters for Oceanic Dive Gear
            //We created a class called OceanicDiveGear with default parameters. Within the constructor we defined our parameters,
            //and used our "this dot" notation to make it easier to add in objects into the class later. Then we created a variable  
            //called diveGear and set it equal to a new object that we added into the class OceanicDiveGear.

class OceanicDiveGear {
    constructor(depth = "Deep Sea", type = "Scuba"){
        this.depth = depth;
        this.type = type;
    }
}

let diveGear = new OceanicDiveGear();
//this would create an object like so

// {
//     depth = "deap sea",
//     type = "scuba"
// }