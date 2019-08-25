/* Elba Chimilio
* Isogram Program:
* An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
* Implement a function that determines whether a string that contains only letters 
* Is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

/* 
* isIsogram(str) function checks if the string passed in the argument is empty,
* If not, it sets it to lowercase. Then it seperates the string into an array and
* Sorts it alphapbetically. Finally, it iterates through the array to find if 
* Any letters repeat and if they do, returns false. Otherwise, returns true.
*/

function isIsogram(str) {

    //First checks if string is empty; returns true
    //Else, sets str to its lowercase version
    if (str === '') {
        return true;
    } else {
        str = str.toLowerCase();
    }

    let array = str.split(''); //Lets array equal the string split by letter
    let sortedArr = array.slice().sort(); //Sorts the array aplhabetically and saves it in sortedArr 

    //For-loop checks if element at (index+1) is equal to element at index 
    //If it is, returns false, otherwise, returns true
    for (let i = 0; i < array.length; i++) {
        if (sortedArr[i + 1] == sortedArr[i]) {
            return false;
        }
    }
    return true;

}

//Test cases
isIsogram('Dermatoglyphics'); //Should return true
isIsogram('aba'); //Should return false
isIsogram('moOse'); //should return true
isIsogram(''); //Should return true