const sendMessage = (message) => {
  console.log(message);
  return message;
}

const rules = (value) => {
    let textString = value.split('');
    let textNums = [];
    console.log('textString', textString);
    for (let i = 0; i < textString.length; i++) {
        switch (textString[i]) {
            case `.` || `,` || `?` || `!`: 
                 textNums.push(1);
            case `a` || `b` || `c`: 
                console.log(textNums, ", in switch");
                 textNums.push(2);;
            case `d` || `e` || `f`: 
                 textNums.push(3);;
            case `g` || `h` || `i`: 
                 textNums.push(4);;   
            case `j` || `k` || `l`: 
                 textNums.push(5);;
            case `m` || `n` || `o`: 
                 textNums.push(6);;
            case `p` || `q` || `r` || `s`: 
                 textNums.push(7);;
            case `t` || `u` || `v`: 
                 textNums.push(8);;
            case `w` || `x` || `y` || 'z': 
                 textNums.push(9);;
            case `'` || `-` || `+` || '=': 
                 textNums.push(`*`);;
            case ` `: 
                 textNums.push(0);;
            default:
                console.log('um... try again?');
                break;  
        }
        console.log(textNums, '???');
        return textNums;
    }
 
}


rules('aaa')
