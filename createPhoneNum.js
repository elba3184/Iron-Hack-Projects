/* Elba Chimilio
* The "Create A Phone Number" program includes a function that 
* accepts an array of 10 integers (between 0 and 9) and returns 
* a string of those numbers in the form of a phone number.
*/

//-------------------------------------------------------------------------------------------------------------------//

/*createPhoneNumber function takes in an array parameter and returns
* a string of ints in the form of a phone number. 
* Uses for-loop to assign numbers array values into string strPhoneNum.
* Then uses if-statement to add format to string for the proper indices.
* Returns string strPhoneNum value.
*/
function createPhoneNumber(numbers){

    let strPhoneNum = "";
    for (i = 0; i < numbers.length; i++){
        strPhoneNum += numbers[i];

        if (i === 0){
            strPhoneNum = "(" + strPhoneNum[i];
        } else if (i == 2){
            strPhoneNum = strPhoneNum + ") ";
        } else if (i == 5){
            strPhoneNum = strPhoneNum + "-";
        }

    }
    return strPhoneNum;
    
}

let arrPhoneNum = [7, 8, 6, 2, 3, 8, 4, 3, 0, 0];
console.log(createPhoneNumber(arrPhoneNum)); //calls createPhoneNumber function that takes in an array of ints