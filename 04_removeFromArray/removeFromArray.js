//removeFromArray removes specified elements from an array
//0th argument is array to be modified; all other arguments are elements to remove

const removeFromArray = function() {
    let modifiedArray = arguments[0];
    for (let i = 1; i < (arguments.length); i += 1) {
    indexToRemove = modifiedArray.indexOf(arguments[i]);
    //indexOf returns -1 if its argument isn't in the array it's called on
    while (indexToRemove != -1) {
        modifiedArray.splice(indexToRemove, 1);
        indexToRemove = modifiedArray.indexOf(arguments[i]);
    }

    }
    return modifiedArray;

};


// Do not edit below this line
module.exports = removeFromArray;



