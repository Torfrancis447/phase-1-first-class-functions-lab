// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
        return array.slice(0,2);
    }
const returnLastTwoDrivers = (fullDriver) => {
        return fullDriver.slice(-2)
    }

const selectingDrivers = [ returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = (x) => {
    return function(multiplier) {
        return x * multiplier
    }
}
const fareDoubler = createFareMultiplier(2) 
const fareTripler = createFareMultiplier(3) 
    
