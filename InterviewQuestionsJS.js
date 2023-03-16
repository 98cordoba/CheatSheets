/*1- IS JS CASE SENSITIVE LANGUAGE?? */
        /*R/. YES, JS IS A CASE SENSITIVE -- FOR EXAMPLE */
var msg = " JS is a case-sensitive language"; // HERE, VAR SHOULD BE USED TO DECLARE A VARIABLE
function display() {
    console.log(msg); // IT WILL NOT DISPLAY THE RESULT
}
display();
/*2- HOW DO YOU REVERSE AN ARRAY  */
        /*R/. WE CAN USE THE reverse() METHOD */
let numbers = [1,2,5,3,4];
numbers.sort((a,b) => b - a);
numbers.reverse();
console.log(numbers);
