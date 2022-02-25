const reverseString = function(x) {
    let doneStr;
    let shortStr;
    let letter;
    for (let i = 0; i < x.length; i++){
        shortStr = x.slice();
        doneStr += shortStr.slice(-1);
        shortStr = x.slice(0, -1);

        
    }
    return doneStr;

};

// Do not edit below this line
module.exports = reverseString;
