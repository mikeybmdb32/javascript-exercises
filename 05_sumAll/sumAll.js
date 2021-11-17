//sumAll takes 2 integers and returns the sum of every number between(and including) them

const sumAll = function(int1, int2) {
    if (isNaN(int1) || isNaN(int2) || !(Number.isInteger(int1)) || !(Number.isInteger(int2)) 
        || typeof int1 === 'string' || typeof int2 === 'string' || int1 < 0 || int2 < 0) {
        return "ERROR"
    } else {
        let largerNumber = Math.max(int1, int2);
        let smallerNumber = Math.min(int1, int2);
        let sum = smallerNumber;
        for (let i = 1; i <= (largerNumber - smallerNumber); i += 1){
            sum = sum + (smallerNumber + i);
        }
        return sum;
    } 
};

// Do not edit below this line
module.exports = sumAll;



