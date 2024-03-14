//  Task 1: Implement a function that calculates total fish caught


function calculateFishCaught (totalFish){
    let total = 0;
    totalFish.array.forEach(dailyFishCaught => {
        total += dailyFishCaught;
        // 0 += 50 <- 50 is new total
        // 50 += 75 <- 125 is new total
        // 
        
    });
}

let weekendFishCaught = [50, 75, 25];
let weekdayFishCaught = [100, 60, 40, 100];
let totalWeekendFishCaught = calculateFishCaught(weekendFishCaught);
console.log("Total weekend fish caught:", totalWeekendFishCaught);

//  task 2: Implement function to filter out endangered fish from fish options
function filterEndangeredFish(fishOptions){
    return fishOptions.filter(option => !option.endangered);
}

let fishOptions = [
    { name: "Salmon", endangered: false},
    {name: "Bluefin Tuna", endangered: true},
    {name: "Cod", endangered: false}
];

//  Task 3: Define a class for Research Institutes

class ResearchInstitutes{
    constructor(instituteName, location, specialty, size){
        this.name = instituteName;
        this.location = location;
        this.specialty = specialty;
        this.size = size;
    }
}

//  Task 4: Extend the ResearchInstitute class for MarineResearchInstitute
class MarineResearchInstitute extends ResearchInstitutes{
    constructor(instituteName, location, specialty, size, waterLocation, climate){
        super(instituteName, location, specialty, size)
        this.waterLocation = waterLocation;
        this.climate = climate;
    }
}

// Task 5: Implement a class with default parameters for Oceanic Dive Gear

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