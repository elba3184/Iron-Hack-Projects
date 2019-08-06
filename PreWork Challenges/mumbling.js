/*Elba Chimilio
* Mumbling program has an accum(str) function that takes in a string
* And produces a lengthed version of the string depending
* On the index of each character. */

//Function takes in a str and lengthens it with each index
function accum(str){

    let counter = 1;
    var newStr = "";
    
    //For-loop, first loop sets first uppercase letter after each index
    //Second for-loop sets amount of lowercase letters based on the index
    for (i = 0; i < str.length; i++){
            newStr += str[i].toUpperCase();
        for(j = 1; j < counter; j++){
            newStr += str[i].toLowerCase();
      }
      counter++;
      //If-statement adds dash after every index in the original loop
      if (i != (str.length - 1)){ 
        newStr += '-';
      }
    }
    return newStr; //Returns new mumbled string
    
}

console.log(accum("abc"));