// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function anonymous() {

    return ["Antonia", "Nuru"]
}

//return last two
const returnLastTwoDrivers = function anonymous2() {
    return ['Amari', 'Mo']
}
 //above functions are in its array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//Function created has an argument. Inside this func is a call back function which is returned
function createFareMultiplier(fare) {
    return function multiplier(multiplier) {
        return fare * multiplier
    }
}
//A function that doubles fare
const fareDoubler = function fareDoubler(fare) {
    return fare * 2
}

//A function that triples fares
const fareTripler = function fareTripler(fare) {
    return fare * 3
}

const selectDifferentDrivers= function selectDifferentDrivers(arrayOfDrivers, function3){
    return function3(arrayOfDrivers)
}