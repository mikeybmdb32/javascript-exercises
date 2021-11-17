const repeatString = function(string, num) {
    if (num < 0){
        return 'ERROR';
    } else if (num == 0) {;
        return '';
    } else {
        let repeatedString = string;
        for (i = 1; i < num; i += 1){
            repeatedString = repeatedString + string;
        }
        return repeatedString;    
    }
};

// Do not edit below this line
module.exports = repeatString;
