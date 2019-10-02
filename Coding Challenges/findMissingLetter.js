function findMissingLetter(arr) {
    //Lowercase and Uppercase alphabet
    let lowerCaseAplha = 'abcdefghijklmnopqrstuvwxyz';
    let upperCaseAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //Checks to see if arr is lowercase or uppercase
    let lowerCaseArr = arr.toString().toLowerCase() == arr && !arr.toString().toUpperCase() !== arr;
    let upperCaseArr = arr.toString().toUpperCase() == arr && !arr.toString().toLowerCase() !== arr;
    //If arr is lowercase or uppercase compare it to the lowercase or uppercase alphabet respectively
    //Return the letter that is missing
    for(let i = 0; i < arr.length; i++) {
        if (lowerCaseArr && (arr.indexOf(lowerCaseAplha[i]) == -1)){ 
            console.log(lowerCaseAplha[i]);
        } else if (upperCaseArr && (arr.indexOf(upperCaseAlpha[i]) == -1)){
            console.log(upperCaseAlpha[i]);
        }
    }
}