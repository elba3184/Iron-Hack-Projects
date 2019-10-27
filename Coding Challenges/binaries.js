function code(str) {
    let currentNum = "";
    for(let i =0; i< str.length; i++) {
      let num = Number(str[i]);
      let binaryLength = String((num).toString(2)).length;
      for(let j = 0; j < binaryLength-1; j++) {
        currentNum += "0";
      }
      currentNum += "1";
      currentNum += (Number(str[i])).toString(2)
    }
    return currentNum;
}

function decode(str) {
    let count = 0;
    let temp = "";
    let currentNum ="";
    for (let i =0 ; i < str.length; i++) {
      count ++;
      if(Number(str[i]) !== 0) {
        i++;
        for(let j = 0; j < count; j++) {
          temp += str[i+j];
        }
        currentNum += String(parseInt(temp,2));
        temp = "";
        i += count-1;
        count =0;
      }
    }
    return currentNum;
}