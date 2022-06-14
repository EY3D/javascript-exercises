const palindromes = function (myString) {
    let workingStr = myString.toLowerCase();
    workingStr = workingStr.replace(/[^a-z]/g, "");
    workingStr2 = workingStr.split("").reverse().join("");
    return (workingStr == workingStr2);
};

// Do not edit below this line
module.exports = palindromes;
