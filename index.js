// Code your solution in this file!
const distanceFromHqInBlocks = function(pickup) {
    return Math.abs(pickup - 42);
}

const distanceFromHqInFeet = function(blocks) {
    return distanceFromHqInBlocks (blocks) * 264;
}

const distanceTravelledInFeet = function(startBlock,destinationBlock) {
    return Math.abs(destinationBlock-startBlock)*264;
}

const calculatesFarePrice = function (start,destination) {
    const distance = distanceTravelledInFeet (start,destination);
    if (distance >= 2500) {
        return `cannot travel that far`;
    }
    else if (distance <400) {
        return 0;
    }
    else if (distance <= 2000) {
        return (distance-400)*0.02;
    }
    
    return  25;
}