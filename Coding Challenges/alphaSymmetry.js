/*
* Elba Chimilio
* Coding Challenge 2: Alphabetical Symmetry
* The solve(arr) function takes in an arr is an argument and
* creates an alphabet array. Runs a for-loop to iterate through
* The given array and returns a new array.
*/

let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function solve(arr){ 
  
  //Creates an empty new array and sets the count equal to 0
  let symmArr = []; 
  let count = 0;

  //for-loop runs while the i iterator is less than the array length
  //And the j iterator is less than the current index length. It checks to
  //See if the any letters are equal to their position in the alphabet. If
  //It is, it increases the count to search through the whole string index.
  //Otherwise, it sets the count to 0 and the symmArr index equal to the
  //Current value of the count
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j].toLowerCase() == alphabet[j]){
        count++;
      }
    }
    symmArr[i] = count;
    count = 0;
  }
  return symmArr;
  
}