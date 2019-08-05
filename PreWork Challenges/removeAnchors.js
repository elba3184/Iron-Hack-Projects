/*Elba Chimilio
* The function/method returns the url with anything after the anchor (#) is removed.
 */

//removeUrlAnchor uses .split() method on the url string 
//To seperate it after the char '#' anchor and only return
//only the first portion (before the '#').
//Learned about .split() function from https://developer.mozilla.org

function removeUrlAnchor(url){
    return url.split('#')[0];
}

console.log(removeUrlAnchor('www.codewars.com#about')); //Calls removeUrlAnchor and passes it a string