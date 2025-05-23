// Code your solution in this file!
const hq = 42;
function distanceFromHqInBlocks(location){
return Math.abs(location-hq)
}

function distanceFromHqInFeet(location){
    const distanceInFeet = distanceFromHqInBlocks(location)*264;
    return distanceInFeet
}

function distanceTravelledInFeet(origin, destination){
    const distanceTravelled = Math.abs(destination-origin)*264
    return distanceTravelled 
}

function calculatesFarePrice(start, destination){
const distance = Math.abs(destination-start)
console.log(distance)
let cost;
    switch(true){
    case distance<=400:
        cost = 0
        break;
    case distance >400 && distance <=2000:
        cost = (distance - 400)*0.02
        break;
    case distance >2000 && distance <=2500:
        cost = 25
        break;
    case distance > 2500:
        cost = 'cannot travel that far'
        break;
    default:
        cost ='please enter valid values'
        break;
}
return cost
}