const reverseString = function(x) {
    let doneStr ="";
    let shortStr = x;
    let letter;
    for (let i = 0; i < x.length; i++){
        doneStr += shortStr.slice(-1);
        shortStr = shortStr.slice(0, -1);       
    }
    return doneStr;

};

// Do not edit below this line
module.exports = reverseString;
