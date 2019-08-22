/* 
* Elba Chimilio
* Project: Basic Algorithms
* Description: Creates a hacker1 and hacker2 variable.
* Has checkLongest() function that takes in two strings and prints a message based on which string is longer
* printNames() function prints the strings it takes in as arguments
* alphabeticalOrder() function prints out a message for which variable comes first alphabetically
*/

let hacker1 = "Jane";
let hacker2 = "Doe";

//checkLongest() function takes in two string parameters
//And prints a message based on which string is longer
function checkLongest(firstHacker, secondHacker) {

    let driver = firstHacker.length;
    let navigator = secondHacker.length;

    if (driver > navigator) {
        console.log("The Driver has the longest name, it has " + driver + " characters");
    }
    else if (driver < navigator) {
        console.log("Yo, navigator got the longest name, it has " + navigator + " characters");
    } else if (driver == navigator) {
        if (driver == 1) {
            console.log("Wow, you both got equally long names, " + driver + " character!");
        } else {
            console.log("Wow, you both got equally long names, " + driver + " characters!");
        }
    }

};

//printNames() function takes in two string parameters
//Prints the strings it takes in as arguments
function printNames(driver, navigator) {

    var upperCase = "";
    for (let i = 0; i < driver.length; i++) {
        upperCase += driver[i].toUpperCase() + " ";
    }
    console.log(upperCase);

    var reverseOrder = "";
    for (let j = navigator.length - 1; j >= 0; j--) {
        reverseOrder += navigator[j];
    }
    console.log(reverseOrder);

};

//alphabeticalOrder() function takes in two string parameters
//prints out a message for which variable comes first alphabetically
function alphabeticalOrder(driver, navigator) {

    let lowerCaseDriv = driver.toLowerCase();
    let lowerCaseNav = navigator.toLowerCase();

    if (lowerCaseDriv < lowerCaseNav) {
        console.log("The driver's name goes first.");
    } else if (lowerCaseDriv > lowerCaseNav) {
        console.log("Yo, the navigator goes first definitely.");
    } else if (lowerCaseDriv == lowerCaseNav) {
        console.log("What?! You both got the same name?");
    }

};

//Calls each function and passes hacker1 and hacker2 variables
checkLongest(hacker1, hacker2);
printNames(hacker1, hacker2);
alphabeticalOrder(hacker1, hacker2);
