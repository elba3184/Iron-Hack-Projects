let hacker1 = "JoHn";
let hacker2 = "Doe";

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

function alphabeticalOrder(driver, navigator) {

    let lowerCaseDriv = driver.toLowerCase();
    let lowerCaseNav = navigator.toLowerCase();
    
    if (lowerCaseDriv > lowerCaseNav) {
        console.log("The driver's name goes first.");
    } else if (lowerCaseDriv < lowerCaseNav) {
        console.log("Yo, the navigator goes first definitely.");
    } else if (lowerCaseDriv == lowerCaseNav) {
        console.log("What?! You both got the same name?");
    }
    
};

checkLongest(hacker1, hacker2);
printNames(hacker1, hacker2);
alphabeticalOrder(hacker1, hacker2);
