/*                  --WRITE JS IN HTML                                */
//<script type="text/javascript"></script>
/*                  --EXPORT EXTERNAL JS IN HTML                      */
<script src="filename.js"></script>
/*                  --  **  BORDER WIDTH    **                                    */
console.log(a);
document.write(a);
alert(a);
confirm("Really?");
prompt("Your age?", "0");
/*                  --  **  FUNCTIONS   **                                      */
function sum(a, b) {
    return a + b;
}
/*                  --  **  DATA TYPES  **                                     */
const age = 20;                         /*  NUMBER      */
const name = 'name';                     /*  STRING      */
const isMale = true;                       /*  BOOLEAN     */
const isFamele = false;                      /*  BOOLEAN     */
const hobbies = ['sports', 'cooking'];      /*  ARRAY       */
const address = { city: 'Alajuela' };        /*  OBJECT      */
const index = null;                       /*  NULL   */
let today;                                      /*  UNDEFINED        */
/*                  --  **  Conditionals    **                                   */
if (age > 20) {                                     /* Condition */
    console.log("");                                /* execute if condition is true     */
} else {                                              /* else block is optional           */
    console.log("");                                /* execute if condition is false    */
}
/*                  --  **  FOR LOOP    **                                       */
for (let i = 0; i < 10; i++) {
    console.log(i);
};
/*                  --  **  FOR IN LOOP **                                    */
const person = {
    name: "Name",
    age: 30,
};
for (let key in person) {
    console.log(key, person[key]);
};
/*                  --  **  FOR OF LOOP **                                    */
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
};
/*                  --  **  FOR EACH LOOP   **                                  */
array.forEach(element => {

});
/*                  --  **  WHILE LOOP  **                                    */
let n = 0;
while (n < 10) {
    console.log(n);
    n++;
};
/*                  --  **  DO WHILE LOOP   **                                 */
var i = 1;
do {
    i += 2;
} while (i < 10);
/*                  --  **  STRINGS **                                       */
const str = "abcdefghijklmnopqrstuvwxyz";
const esc = "I don\ 't \n know";                                    //      \n NEW LINE
const len = str.length;                                             //      STRING LENGTH
str.indexOf("lmno");                                                //      FIND SUBSTRING
str.lastIndexOf("lmno");                                            //      LAST OCCURANCE
str.slice(3, 6);                                                     //      CUTS OUT "def"
str.replace("abc", "123");                                           //      FIND AND REPLACE
str.toUpperCase();                                                  //      CONVERT TO UPPER CASE
str.toLowerCase();                                                  //      CONVERT TO LOWER CASE
str.concat(" ", str2);                                              //      "abc" + " " + str2
str.charAt(2);                                                      //      CHARACTER AT INDEX: "c"
str[2];                                                             //      "c"
str.charCodeAt(2);                                                  //      CHARACTER CODE AT INDEX: "c" -> 99
str.split(",");                                                     //      SPLITTING A STRING ON COMMAS
str.split("");                                                      //      SPLITTING ON CHARACTERS
str.toString(16);                                                   //      NUMBER TO HEX(16), OCTAL OR BINARY
str.includes('xyz');                                                //      TRUE
str.repeat(2);                                                      //      REPEAT
str.trim()                                                          //      BORRA ESPACIOS
/*                  --  **  NUMBERS **                                       */
var pi = 3.141;                                                     //
pi.toFixed(0);                                                      //      RETURNS 3
pi.toFixed(2);                                                      //      RETURNS 3.14
pi.toPrecision(2);                                                  //      RETURNS 3.1
pi.valueOf();                                                       //      RETURNS number
Number(true);                                                       //      CONVERTS TO NUMBER 
Number(new Date());                                                 //      NUMBER OF MILISECONDS SINCE 1970
parseInt("3 months");                                               //      RETURNS THE FIRST NUMBER: 3
parseFloat("3.5 days");                                             //      RETURNS 3.5
Number.MAX_VALUE                                                    //      LARGEST POSSIBLE JS NUMBER
Number.MIN_VALUE                                                    //      SMALLEST POSSIBLE JS NUMBER
Number.NEGATIVE_INFINITY                                            //      -INFINITY
Number.POSITIVE_INFINITY                                            //      +INFINITY
/*                  --  **  MATH    **                                          */
var pi = Math.PI;                                                   //      3.141592653589793
Math.round(4.4);                                                    //      4   -   rounded
Math.round(4.5);                                                    //      =   5
Math.pow(2, 8);                                                      //      = 256 - 2 to the power of 8
Math.sqrt(49);                                                      //      = 7 - square root
Math.abs(-3.14);                                                    //      = 3.14 - absolute, positive value
Math.ceil(3.14);                                                    //      = 4 - rounded up
Math.floor(3.99);                                                   //      = 3 - rounded down
Math.sin(0);                                                        //      = 0 - sine
Math.cos(Math.PI);                                                  //      OTHERS: tan,atan,asin,acos
Math.min(0, 3, -2, 2);                                              //      = -2 - the lowest value
Math.max(0, 3, -2, 2);                                              //      = 3 - the highest value
Math.log(1);                                                        //      = 0 natural logarithm
Math.exp(1);                                                        //      = 2.7182pow(E, x)
Math.random();                                                      //      random number between 0 and 1
Math.floor(Math.random() * 5) + 1;                                  //      random integer, from 1 to 5
/*                  --  **  ARRAYS  **                                        */
var arr = [1, 2, 3, 4, 4];
arr.at(1);                                                           //                                                 2
arr.toString();                                                      //     CONVERT THE ARRAY TO A STRING
arr.push(5);                                                         //     ADD ELEMENT TO THE END                  :   [ 1, 2, 3, 4, 5 ]
arr.pop();                                                           //     REMOVE
arr.fill(1);                                                         //     REMOVE LAST ELEMENT                     :   [ 1, 2, 3 ]
arr.shift();                                                         //     FILL EVERY ELEMENT                      :   [ 1, 1, 1, 1 ]
arr.unshift(5);                                                      //     REMOVE FIRST ELEMENT                    :   [ 2, 3, 4 ]
arr.reverse();                                                       //     ADD ELEMENT TO BEGINNING                :   [ 5, 1, 2, 3, 4 ]
arr.map(item => 2 * item);                                             //     SORT IN DESCENDING ORDER                :   [ 4, 3, 2, 1 ]
arr.filter(item => item > 2);                                        //     IS ARRAY CONTAINS A SPECIFIED VALUE     :   TRUE
arr.find(item => item > 2);                                          //     MAP ELEMENTS                            :   [ 2, 3, 6, 8 ]
arr.every(item => item > 0);                                         //     FILTER ELEMENT                          :   [ 3, 4 ]
arr.indexOf(4)                                                       //     RETURNS THE INDEX OF THE ELEMENT        :   2
arr.findIndex(item => item === 2);                                   //     FIND ELEMENT                            :   3 (FIRST MATCH)
arr.reduce((prev, curr) => prev + curr, 0);                             //                                                 TRUE
arr.slice(1, 4);                                                      //     SLICE ELEMENTS FROM [1] to [4-1]        :   2,4
arr.splice(2, 0, "i", "p");                                            //     ADD ELEMENTS                            :   [ 1, 2, 'i', 'p', 3, 4 ]
arr.join(" * ");                                                     //     JOIN                                    :   "1 * 2 * 3 * 4"
arr.sort();                                                          //     
x.sort(function (a, b) { return a - b });                                //     
x.sort(function (a, b) { return b - a });                                //     SORT STRING ALPHABETICALLY 
x.sort(function (a, b) { return 0.5 - Math.random() });                   //     NUMERIC SORT
/*                  --**    DATES   **                                         */
var d = new Date();
Date("2023-06-23");                                                 //      DATE DECLARATION
Date("2023");                                                       //      IS SET TO JAN 01
Date("2023-01-15T:12:00:00-09:45");                                 //      YYYY-MM-DDTHH:MM:SSZ
Date("January 15 2023");                                            //      LONG DATE FORMAT
Date("Jan 15 2023 07:45:00 GMT+0530");                              //      TIME ZONE
a = d.getDay();                                                     //      GETTING THE WEEKDAY
getDate();                                                          //      DAY AS A NUMBER             (1-31)
getDay();                                                           //      WEEKDAY AS A NUMBER         (0-6)
getFullYear();                                                      //      FOUR DIGIT YEAR             (YYYY)
getHours();                                                         //      HOUR                        (0-23)
getMilliseconds();                                                  //      MILLISECONDS                (0-999)
getMinutes();                                                       //      MINUTES                     (0-59)
getMonth();                                                         //      MONTH                       (0-11)
getSeconds();                                                       //      SECONDS                     (0-59)
getTime();                                                          //      MILLISECONDS SINCE 1970
/*                  --  **  ERRORS  **                                        */
try {                                                               //      BLOCK OF CODE TO TRY
    undefinedFunction();
} catch (err) {                                                     //      BLOCK TO HANDLE ERRORS
    console.log(err.message);
}
var x = document.getElementById("mynum").value;                     //      INPUT VALIDATION
try {                                                                //      ERROR CASES
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x > 10) throw "too high";
} catch (err) {                                                       //      IF THERE'S AN ERROR
    document.write("input is " + err);                              //      OUTPUT ERROR
    console.error(err);                                             //      WRITE THE ERROR IN CONSOLE
} finally {                                                         //      EXECUTED REGARDLESS OF THE TRY / CATCH RESULT
    document.write("</br />Done");
}
/*                  --  **  ERRORS HANDLING IN JS **                                        */
function name(params) {
    try {

    } catch (error) {

    }
    //  EXECUTES WHEN A JS PROMISE THAT HAS NO REJEACTION HANDLER IS REJACTED
    window.addEventListener('unhandledrejection', function () { });
}
/*                  --  **  JSON    **                                            */
var strg = '{"names":[' +                                            //      CREATE JSON OBJECT
    '{"first":"Hakuna","lastN":"Matata"},' +
    '{"first":"Joseph","lastN":"Cordoba"},' +
    '{"first":"Air","lastN":"Jordan"}] }';
myObj = JSON.parse(strg);                                           //      PARSE
document.write(myObj.names[1].first);                               //      ACCESS
var myJson = JSON.stringify(myObj);                                 //      STRINGIFY
localStorage.setItem("testJSON", myJson);                           //      STORING DATA
text = localStorage.getItem("testJSON");                            //      RETRIEVING DATA
/*                  --  **    OBJECT  **                                        */
var student = {                                                     //      OBJECT NAME
    firstName: "Joseph",                                             //      LIST OF PROPERTIES AND VALUES
    lastName: "Cordoba",
    age: 18,
    height: 170,
    fullname: function () {                                          //      OBJECT FUNCTION
        return this.firstName + " " + this.lastName;
    }
};
student.age = 19;                                                   //      SETTING VALUE
student[age]++;                                                     //      INCREMENTING
nameStudent = student.fullname();                                          //      CALL OBJECT FUNCTION
/*                  --  **    EVENTS  **                                        */
var MediaEvent = ['onabort', 'oncanplay', 'oncanplaythrough', 'ondurationchange', 'onended', 'onerror', 'onloadeddata', 'onloadedmetadata', 'onloadstart',
    'onpause', 'onplay', 'onplaying', 'onprogress', 'onratechange', 'onseeked', 'onseeking', 'onstalled', 'onsuspend', 'ontimeupdate',
    'onvolumechange', 'onwaiting'];
var MiscellaneousEvent = ['transitionend', 'onmessage', 'onmousewheel', 'ononline', 'onoffline', 'onpopstate', 'onshow', 'onstorage', 'ontoggle', 'onwheel',
    'ontouchcancel', 'ontouchend', 'ontouchmove', 'ontouchstart'];
var MouseEvent = ['onclick', 'oncontextmenu', 'ondblclick', 'onmousedown', 'onmouseenter', 'onmouseleave', 'onmousemove', 'onmouseover', 'onmouseout',
    'onmouseup'];
var FrameEvent = ['onabort', 'onbeforeunload', 'onerror', 'onhashchange', 'onload', 'onpageshow', 'onpagehide', 'onresize', 'onscroll', 'onunload'];
var FormEvent = ['onblur', 'onchange', 'onfocus', 'onfocusin', 'onfocusout', 'oninput', 'oninvalid', 'onreset', 'onsearch', 'onselec', 'onsubmit'];
var DragEvent = ['ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop'];
var AnimationEvent = ['animationend', 'animationiteration', 'animationstart'];
var KeyboardEvent = ['onkeydown', 'onkeypress', 'onkeyup'];
/*                  --  **    OBJECTS  **                                        */
const personObject = {
    name: 'personName',
    age: 25,
    gender: 'male',
};
const jobObject = {
    job: 'dev',
    salary: 1000,
}
//  GET ALL OBJECTS KEYS
Object.keys(personObject);  //  ['name','age','gender']
//  GET ALL OBJECTS VALUES
Object.values(personObject);    //  ['personName',25,'male']
//  GET ALL OBJECTS ENTRIES
Object.entries(personObject);   // [['name','personName'],['age',25],['gender','male']]
//  ASSIGN OBJECT TO ANOTHER OBJECT
Object.assign(personObject, jobObject);  //  {name: 'personName',age: 25,gender: 'male',job: 'dev',salary: 1000}
/*                  --  **    SCOPE  **                                        */
//  GLOBAL SCOPE
const pie = 3.14;
//  FUNCTION SCOPE
function nameFunction(params) {
    console.log(pie); // 3.14
    const numFunction = 32; // FUNCTION SCOPE
    console.log(numFunction);   //  32
}
//  BLOCK SCOPE
if (condition) {
    const fullName = 'Fabian Cordoba';  //  BLOCK SCOPE
    console.log(fullName)   // BLOCK SCOPE
}
console.log(pie);  //  3.14
console.log(numFunction);  //  ReferenceError: numFunction is not defined 
console.log(fullName);  //  ReferenceError: fullName is not defined
/*                  --  **    ASYNC/AWAIT  **                                        */
/*   */
//  USED ASYNC TO MAKE THE FUNCTION ACT ASYNCHRONOUS
async function name(params) {
    try {
        //  USED AWAIT TO MAKE THE CODE WAIT UNTIL PROMISE RETURNS A RESULT
        const res = await fetch('')
        const data = await res.json()
        return data
    } catch (errr) {
        console.log(errr)
    }
}
/*                  --  **  'THIS' KEYWORD  **                                        */
/*
ITS VALUE DEPENDS ON WHERE IT'S BEING INVOKED
FOR EXAMPLE, IF IT'S INVOKED ALONE, ITS VALUE IS A GLOBAL OBJECT. IF IT'S GATHERED IN AN OBJECT THE VALUE IS AN OBJECT
*/
console.log(this);  //  RETURN GLOBAL
var user = {
    name: "devName",
    getUser: function () {
        return this;
    }
}
user.getUser()  //  {NAME: "devName", getUser: f}
/*                  --  **  HOISTING  **                                        */
/* HOISTING IS A JS CONCEPT WHERE THE JS VARIABLES OR FUNCTIONS CAN BE ACCESSED BEFORE INITIALIZING
VARIABLES DEFINED WITH "LET" CANT'T BE ACCESSED BEFORE INITIALIZING */
userName = "userNameString" // THIS WORKS
console.log(userName) // userNameString
var userName = ""
console.log(userName) // ""
/*                  --  **  CLOSURE  **                                        */
/*
THE CLOSURE IS LIKE A FUNCTION WITH A BAG PACK, YOU MAY HAVE EXPERIENCED THAT SOMETIMES WHEN A FUNCTION IS INVOKED
AND THE RETURNING VALUE IS SAVED TO A NEW VARIABLE, THE FUNCTION VARIABLES ARE STILL ACCESSIBLE 
THIS CONCEPT IS CALLED CLOSURE
*/
function saveUserData(params) {
    const a = "";
    const b = "";
    return function () {
        return {
            a,
            b,
        };
    };
}
const c = saveUserData();
console.log(us()); // { a: "", b: ""}