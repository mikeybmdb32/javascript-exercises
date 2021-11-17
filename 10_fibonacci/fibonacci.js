//returns a specific member of the Fibonacci sequence

const fibonacci = function(fibonacciSequenceNumber) {
    if (fibonacciSequenceNumber < 1) return "OOPS";
    //didn't use === below because spec requires allowing input numbers in string form
    if (fibonacciSequenceNumber == 1) return 1;
    let previousFibonacci = 0;
    let currentFibonacci = 1;
    let nextFibonacci;
    for (i = 1; i < fibonacciSequenceNumber; i += 1) {
        nextFibonacci = previousFibonacci + currentFibonacci
        previousFibonacci = currentFibonacci
        currentFibonacci = nextFibonacci
    }
    return nextFibonacci;

};

// Do not edit below this line
module.exports = fibonacci;
