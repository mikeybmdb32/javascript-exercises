const caesar = function (string, shift) {
    let letterArray = string.split('');
    let letterIsUpperCase;
    //any shift larger than 26 will result in the exact same character
    let letterNumberShifted
    shift = shift % 26;
    for (i = 0; i < string.length; i += 1) {
        //punctuation and spaces will not be shifted
        if ([',', '!', '!', '?', ';', ' '].includes(letterArray[i])) {
            continue;
        }
        //determine case of letter
        letterIsUpperCase = (letterArray[i] === letterArray[i].toUpperCase());
        //make letter uppercase to simplify shifting of letter
        if (letterIsUpperCase == false) {
            letterArray[i] = letterArray[i].toUpperCase();
        }
        //unicode for capital letters are all between 65 and 90
        //need to wrap if shifted value falls outside of this
        letterNumber = letterArray[i].charCodeAt(0);
        if (letterNumber + shift < 65) {
            letterNumberShifted = 90 + ((letterNumber + shift) - 65) + 1;
        }
        else if (letterNumber + shift > 90) {
            letterNumberShifted = 65 + ((letterNumber + shift) - 90) - 1;
        } else {
            letterNumberShifted = shift + letterNumber;
        }
        //if original letter was lowercase, convert to unicode for lowercase
        if (letterIsUpperCase == false) {
            letterNumberShifted = letterNumberShifted + 32;
        }
        letterArray[i] = String.fromCharCode(letterNumberShifted);
    }
    return letterArray.join('');
};

/*
pseudocode
convert string to array of characters
for each character
-if character is punctuation or space, move on to next character
-check if letter is uppercase or lowercase and store result
-convert letter to uppercase
-convert letter to number
-shift each number by shift amount
    -if number + shift amount < 65 || number + shift amount > 90
        -add modulus of shift amount to number
    else add shift amount to number
-if letter was lowercase, add 32 to number
-convert number back to letter
convert array of letters back to string
*/

// Do not edit below this line
module.exports = caesar;


