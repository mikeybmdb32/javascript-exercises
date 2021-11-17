const reverseString = function(str) {

splitStringArray = str.split('');
//store letters of original string in opposite order
let reversedStringArray;
for (let i = 0; i < str.length ; i += 1){
reversedStringArray[i] = splitStringArray[length(str) - i]
}

return reversedStringArray;

};



// Do not edit below this line
module.exports = reverseString;
