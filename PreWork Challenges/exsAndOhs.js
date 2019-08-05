/*Elba Chimilio
* Checks to see if a string has the same amount of 'x's and 'o's. 
* The method must return a boolean and be case insensitive. 
* The string can contain any char.
*/

//Function will check if string has an equal amount of x's and o's
function checkEqual(str){

    //Converts string to lowercase values since result is case-senstitive
    str = str.toLowerCase();
    
    //For-loop through the string and set the counters
    //Equal to the number of x or o's found respectively.
    let counterX = 0; //Counter for x-char
    let counterO = 0; //Counter for o-char
    for (i = 0; i < str.length; i++){
        if (str[i] === 'x'){
            counterX++;
        } else if (str[i] === 'o'){
            counterO++;
        }
    }
    
    //If the amount of x's and o's is equal, return true
    //Otherwise return false
    if (counterX === counterO){
        return true;
    } else {
        return false;
    }
    
}

console.log(checkEqual("XXqweqw1x0o")); //calls checkEqual function and passes it a string