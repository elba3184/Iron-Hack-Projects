/* Elba Chimilio
*  Mexican Wave Program
*/

function wave(str){
  var result = [];
  for (i = 0; i < str.length; i++) {
    if (str[i] != ' ') 
      result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1))
  }
  return result;
}