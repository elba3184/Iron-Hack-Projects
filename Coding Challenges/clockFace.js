/* Elba Chimilio
* Clocky Mc Clock-Face Program:
* Given the angle (in degrees) of the hour-hand, return 
* The time in HH:MM format. Round down to the nearest minute.
*/

//Function takes in an anlge (number) and returns a string in the HH:MM format
var whatTimeIsIt = function(angle) {

    //When 1 min goes by => 360 degrees/60 mins = 6 degrees/min
    //Thus, 1 hour goes by => 360 degrees/12 hours 
    //=> 30degrees/60 mins = 0.5 degrees/min
    let totalMinutes = Math.floor(angle*2); 
    //Divides the totalminutes by 60 to get the hours as 60 mins = 1 hr
    let hours = Math.floor(totalMinutes/60); 
    //The minutes is the remainder of the totalMinutes modulo 60
    let minutes = totalMinutes % 60; 
    //If the angle is 0, it should be the base case = 12:00
    if(angle == 0) {
        return '12:00';
    }
    //If the hours are 0 or 12, the hour should be 12
    if (hours == 0) {
        hours = '12';
    }
    //If the length of the minutes as a string is less than 2
    //Append 0 to the front 
    if(minutes.toString().length < 2) {
        minutes = 0 + minutes.toString();
    }
    //If the length of the hours as a string is less than 2
    //Append 0 to the front 
    if(hours.toString().length < 2 ) {
        hours = 0 + hours.toString();
    }
    return hours + ":" + minutes; //Returns string in HH:MM format

}
