/*Given an array of objects representing people with a birth and death year, 
returns the oldest person */

const findTheOldest = function(people) {
    let oldest = people[0];
    let currentYear = new Date().getFullYear();
    if (oldest.yearOfDeath == undefined) {
        oldest.yearOfDeath = currentYear;
    }
    for(i = 1; i < people.length; i += 1) {
        if (people[i].yearOfDeath == undefined) {
            people[i].yearOfDeath == currentYear;
        }
        if ((oldest.yearOfDeath - oldest.yearOfBirth)
            < (people[i].yearOfDeath - people[i].yearOfBirth)) {
            oldest = people[i];
        }
    }
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;

