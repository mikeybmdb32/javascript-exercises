//determines whether or not a given string is a palindrome

const palindromes = function(str) {
    /*change all letters to lowercase to prevent mismatches due to capitalized letters
    remove all non-alpha elements (spaces, punctuation, numbers, etc)*/
    let splitStringArray = str.toLowerCase().split('');
    let regExp = /[a-z]/;
    for (i = 0; i < splitStringArray.length; i += 1) {
        while (regExp.test(splitStringArray[i]) == false) {
            splitStringArray.splice(i, 1);
        }
    }
    //return false if string is not a palindrome
    for (i = 0; i < splitStringArray.length; i += 1) {
        if (splitStringArray[i] !== (splitStringArray[splitStringArray.length -1 - i])) {
            return false;
        }
    }

    return true;
};


// Do not edit below this line
module.exports = palindromes;




//console.log(palindromes('abba'));