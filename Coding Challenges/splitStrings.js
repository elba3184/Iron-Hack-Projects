function solution(str){
  var strArr = str.split("");
	var arr1 = [];
	var arr2 = [];
	for (let i = 0 ; i < strArr.length; i = i+2) {
		let pairedArr = [];
		pairedArr.push(strArr[i], strArr[i+1]);
		arr1.push(pairedArr);
	}
	for (let i = 0; i < arr1.length; i++) {
	  let pairString = ""
	  pairString = arr1[i].join("")
	  arr2.push(pairString)
	}
	if (arr2[arr2.length-1].length%2 !== 0) {
	  arr2[arr2.length-1]+= "_";
	}
	return arr2;
  
  }
  
  console.log(solution('abcd'));