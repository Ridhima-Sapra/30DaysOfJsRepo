//LEETCODE 1 : Write a function createHelloWorld. It should return a new function that always returns "Hello World"

//Solution : 
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};


//LEETCODE 2 : Given an integer n, return a counter function. This counter function initially returns n and 
//then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

//Solution : 

var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};