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
