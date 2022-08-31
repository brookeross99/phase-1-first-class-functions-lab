function returnFirstTwoDrivers(){
    const returnFirstTwoDrivers= ["Antonia","Nuru","Amari","Mo",]
    return returnFirstTwoDrivers.slice(0,2);
}

function returnLastTwoDrivers(){
    const returnLastTwoDrivers=['Amari','Mo']
    return returnLastTwoDrivers.splice(-2)
}

const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier=function(multiply){
    return function (num){
        return multiply*num;
    };
}

const fareDoubler=createFareMultiplier(2);
const fareTripler=createFareMultiplier(3);

const selectDifferentDrivers= function(drivers, driversToReturn){
    return driversToReturn(drivers);
}